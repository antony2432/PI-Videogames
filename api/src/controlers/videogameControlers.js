import {
  fetchVideoGame,
  fetchVideoGameByParams
} from '../services/fetchRawg.js'
import Genre from '../db/models/Genre.js'
import { isUUID } from '../utils/validacion.js'
import Videogame from '../db/models/Videogame.js'

const getVideoGame = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('games')
    const newresult = results.map((g) => {
      const {
        id,
        name,
        background_image,
        rating,
        platforms,
        genres,
        stores,
        tags
      } = g

      return {
        id,
        name,
        background_image,
        rating,
        platforms: platforms.map((p) => {
          return { name: p.platform.name, id: p.platform.id }
        }),
        genres: genres.map((g) => {
          return { name: g.name, id: g.id }
        }),
        tags: tags.map((t) => {
          return { name: t.name, id: t.id }
        }),
        stores: stores.map((s) => {
          return { name: s.store.name, id: s.store.id }
        })
      }
    })
    const storeVideogames = await Videogame.findAll()
    return res.status(200).json([...storeVideogames, ...newresult])
  } catch (err) {
    return res.status(500).json({ error: err })
  }
}

const getVideoGameById = async (req, res) => {
  try {
    const { idVideogame } = req.params
    if (idVideogame.length < 6) {
      console.log('llegue aqui')
      const response = await fetchVideoGame(`games/${idVideogame}`)
      const { detail } = response
      if (detail) {
        return res
          .status(200)
          .json({ message: 'no se encontro el resultado en rawGames' })
      } else {
        const {
          id,
          name,
          description,
          released,
          updated,
          background_image,
          background_image_additional,
          website,
          rating,
          parent_platforms,
          stores,
          tags,
          genres
        } = response

        return res.json({
          id,
          name,
          description,
          released,
          updated,
          background_image,
          background_image_additional,
          website,
          rating,
          platforms: parent_platforms.map((p) => {
            return { name: p.platform.name, id: p.platform.id }
          }),
          stores: stores.map((s) => {
            return { name: s.store.name, id: s.store.id }
          }),
          tags: tags.map((t) => {
            return { name: t.name, id: t.id }
          }),
          genres: genres.map((g) => {
            return { name: g.name, id: g.id }
          })
        })
      }
    } else {
      if (isUUID(idVideogame)) {
        const temporal = await Videogame.findByPk(idVideogame)
        if (temporal !== null) {
          console.log(temporal)
          return res.status(200).json(temporal)
        } else {
          return res
            .status(200)
            .json({ message: 'no se encontro el resultado' })
        }
      } else {
        return res.status(400).json({ message: 'No es un id valido' })
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

const getVideogameByName = async (req, res) => {
  try {
    const { name } = req.query
    const { results } = await fetchVideoGameByParams(name)
    let temporalResult = []

    if (results.length > 15) {
      temporalResult = [...temporalResult, ...results.slice(0, 15)]
    } else {
      temporalResult = [...temporalResult, ...results]
    }
    const storeGame = await Videogame.findAll({
      where: {
        name: [name]
      },
      limit: 15
    })
    if (storeGame.length === 0) {
      return res.status(200).json(temporalResult)
    } else {
      temporalResult = [...temporalResult, ...storeGame]
      return res.status(200).json(temporalResult)
    }
  } catch (err) {
    console.log(err)
  }
}

const getGenres = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('genres')
    const respu = []
    for (let i = 0; i < results.length; i++) {
      respu.push(results[i].name)
      const [genre, created] = await Genre.findOrCreate({
        where: { name: results[i].name },
        defaults: {
          id: results[i].id
        }
      })
      console.log(genre, created)
    }
    const genres = await Genre.findAll()
    res.json(genres)
  } catch (err) {
    console.log(err)
  }
}

const postVideoGame = async (req, res) => {
  try {
    const {
      name,
      background_image,
      description,
      released,
      platforms,
      newGenres,
      rating
    } = req.body
    const newGame = await Videogame.create({
      name,
      description,
      releaseDate: released,
      rating,
      platforms,
      background_image
    })
    console.log(newGame)
    // newGenres.map(async (g) => {
    //   const genre = await Genre.findOne({ where: { name: g } })
    //   genre.setVideogame(newGame)
    // })

    res.status(200).json({ message: 'se envio de forma Correcta' })
  } catch (err) {
    console.log(err)
  }
}

const getPlataform = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('platforms')
    // const respu = []
    // for (let i = 0; i < results.length; i++) {
    //   respu.push( results[i].name)
    // }
    res.json(results)
  } catch (err) {
    console.log(err)
  }
}
const getTags = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('tags')
    res.json(results)
  } catch (err) {
    console.log(err)
  }
}
const getStores = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('stores')
    // const respu = []
    // for (let i = 0; i < results.length; i++) {
    //   respu.push( results[i].name)
    // }
    res.json(results)
  } catch (err) {
    console.log(err)
  }
}
export {
  getVideoGame,
  getVideoGameById,
  getVideogameByName,
  getGenres,
  postVideoGame,
  getPlataform,
  getTags,
  getStores
}

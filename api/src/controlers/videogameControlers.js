import {
  fetchVideoGame,
  fetchVideoGameByParams
} from '../services/fetchRawg.js'
import Genre from '../db/models/Genre.js'
import { isUUID } from '../utils/validacion.js'
import Videogame from '../db/models/Videogame.js'

//utils
import { genresByIdVideogame } from '../utils/utils.js'

const getVideoGame = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('games')
    const videogames = await Videogame.findAll()

    const newResult = results.map((g) => {
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

      const platformsResult = platforms.map((p) => {
        return { name: p.platform.name, id: p.platform.id }
      })
      const genresResult = genres.map((g) => {
        return { name: g.name, id: g.id }
      })
      const tagsResult = tags.map((t) => {
        return { name: t.name, id: t.id }
      })
      const storesResult = stores.map((s) => {
        return { name: s.name, id: s.id }
      })

      return {
        id,
        name,
        background_image,
        rating,
        platforms: platformsResult,
        genres: genresResult,
        tags: tagsResult,
        stores: storesResult
      }
    })

    const newStoreVideoGames = await Promise.all(
      videogames.map(async (vg) => {
        const {
          id,
          name,
          description,
          releaseDate,
          rating,
          platforms,
          background_image
        } = vg
        const temporalGenres = await genresByIdVideogame(id)
        return {
          id,
          name,
          description,
          releaseDate,
          rating,
          platforms,
          background_image,
          genres: temporalGenres
        }
      })
    )

    return res.status(200).json([...newStoreVideoGames, ...newResult])
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error interno' })
  }
}

const getVideoGameById = async (req, res) => {
  try {
    const { idVideogame } = req.params
    if (idVideogame.length < 6) {
      const response = await fetchVideoGame(`games/${idVideogame}`)
      const { detail } = response
      if (detail) {
        return res
          .status(200)
          .json({ message: 'no se encontro el resultado en rawGames' })
      }
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
        platforms: parent_platforms.map((p) => ({
          name: p.platform.name,
          id: p.platform.id
        })),
        stores: stores.map((s) => ({ name: s.store.name, id: s.store.id })),
        tags: tags.map((t) => ({ name: t.name, id: t.id })),
        genres: genres.map((g) => ({ name: g.name, id: g.id }))
      })
    }
    if (isUUID(idVideogame)) {
      const temporal = await Videogame.findByPk(idVideogame)
      if (temporal !== null) {
        return res.status(200).json(temporal)
      }
      return res.status(200).json({ message: 'no se encontro el resultado' })
    }
    return res.status(400).json({ message: 'No es un id valido' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error interno' })
  }
}

const getVideogameByName = async (req, res) => {
  try {
    const { name } = req.query
    const { results } = await fetchVideoGameByParams(name)

    let temporalResult = results.slice(0, 15)
    console.log(name)
    const storeGame = await Videogame.findAll({
      where: {
        name: [name]
      },
      limit: 15
    })

    if (storeGame.length > 0) {
      const index = 15 - storeGame.length
      temporalResult = temporalResult.slice(0, index)
      temporalResult = [...temporalResult, ...storeGame]
    }

    return res.status(200).json(temporalResult)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error interno' })
  }
}


const getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.status(200).json(genres)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error interno' })
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

    // Create the new video game
    const newGame = await Videogame.create({
      name,
      description,
      releaseDate: released,
      rating,
      platforms,
      background_image
    })

    // Find all genres that match the names in newGenres
    const genres = await Genre.findAll({ where: { name: newGenres } })

    // Associate the new video game with the found genres
    await newGame.addGenres(genres)

    res.status(200).json({ message: 'Video game created successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}


const getPlataform = async (req, res) => {
  try {
    const { results } = await fetchVideoGame('platforms')
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

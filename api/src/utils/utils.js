import Genre from '../db/models/Genre.js'
import VideogameGenre from '../db/models/VideogamesGenre.js'

const genresByIdVideogame = async (id) => {
  let arrgenre = []
  const genresStore = await VideogameGenre.findAll({
    where: { VideogameId: [id] },
    attributes: ['GenreId']
  })

  for (let i = 0; i < genresStore.length; i++) {
    const { dataValues } = await Genre.findByPk(genresStore[i].GenreId)
    arrgenre.push({id: dataValues.id, name: dataValues.name})
  }
  return arrgenre
}

export { genresByIdVideogame }

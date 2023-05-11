import { DataTypes } from 'sequelize'
import sequelize from '../conection.js'
import Videogame from './Videogame.js'
import Genre from './Genre.js'

const VideogameGenre = sequelize.define('VideogameGenre', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
})

Videogame.belongsToMany(Genre, { through: VideogameGenre })
Genre.belongsToMany(Videogame, { through: VideogameGenre })
console.log('se crea')
export default VideogameGenre

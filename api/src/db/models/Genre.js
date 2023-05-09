import { DataTypes } from 'sequelize'
import sequelize from '../conection.js'
import Videogame from './Videogame.js'

const Genre = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Genre.belongsToMany(Videogame, {
  through: 'VideogameGenre'
})

export default Genre

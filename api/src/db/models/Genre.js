import { DataTypes } from 'sequelize'
import sequelize from '../conection.js'

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


export default Genre

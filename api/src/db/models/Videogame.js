import { DataTypes } from 'sequelize'
import sequelize from '../conection.js'

const Videogame = sequelize.define('Videogame', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false
  },
  platforms: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  background_image: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
;(async () => {
  await sequelize.sync({ force: true })
  console.log('se creo de forma correcta')
})()
export default Videogame

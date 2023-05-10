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
  sequelize
    .sync()
    .then(() => {
      console.log(
        'La conexión a la base de datos se ha establecido correctamente.'
      )
    })
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err)
    })
})()
export default Videogame

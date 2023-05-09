import { Sequelize } from 'sequelize'
import configuracion from '../config.js'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = configuracion

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
})

try {
  await sequelize.authenticate()
  console.log('conecion establecida')
} catch (error) {
  console.error('no se pudo conectar a la db:', error)
}
export default sequelize

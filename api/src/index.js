import app from './app.js'
import configuracion from './config.js'
import { networkInterfaces } from 'os'

const { port } = configuracion
const { Ethernet } = networkInterfaces()

app.listen(port, () => {
  console.log(`Servidor corriendo en: `)
  console.log(`Local: http://localhost:${port}`)
  console.log(`En host: http://${Ethernet[1].address}:${port}`)
})

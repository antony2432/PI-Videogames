import { Router } from 'express'
import {
  getVideoGame,
  getVideoGameById,
  getVideogameByName,
  getGenres,
  postVideoGame,
  getPlataform,
  getTags,
  getStores,
} from '../controlers/videogameControlers.js'
const router = Router()

router.get('/', (req, res) => {
  res.end('Wonsa me la pela')
})

router.get('/videogames', getVideoGame)
router.post('/videogames', postVideoGame)
router.get('/videogames/:idVideogame', getVideoGameById)
router.get('/videogames/search/propmt', getVideogameByName)
router.get('/genres', getGenres)
router.get('/plataform', getPlataform)
router.get('/tags', getTags)
router.get('/stores', getStores)
export default router

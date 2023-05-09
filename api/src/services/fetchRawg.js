import configuracion from '../config.js'

const API = 'https://api.rawg.io/api'
const { API_KEY } = configuracion

const fetchVideoGame = async (re) => {
  try {
    const data = await fetch(`${API}/${re}?key=${API_KEY}`)
    const response = await data.json()
    return response
  } catch (err) {
    console.log(err)
  }
}
const fetchVideoGameByParams = async (re) => {
  try {
    const data = await fetch(`${API}/games?search=${re}&key=${API_KEY}`)
    const response = await data.json()
    return response
  } catch (err) {
    console.log(err)
  }
}

export { fetchVideoGame, fetchVideoGameByParams }

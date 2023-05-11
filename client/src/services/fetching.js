const API = 'http://localhost:3001'

const fetchSearchByname = async name => {
  const response = await fetch(`${API}/videogames/search/propmt?name=${name}`)
  return response.json()
}

export { fetchSearchByname }

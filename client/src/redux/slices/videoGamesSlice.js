import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allVideoGames: [],
  displayGames: [],
  filters: { genders: 'all', platform: 'all', tags: 'all', stores: 'all' }
}

const videoGamesSlice = createSlice({
  name: 'videogames',
  initialState,
  reducers: {
    setVideoGames: (state, actions) => {
      state.allVideoGames = actions.payload
    },
    filterGames: (state, actions) => {
      const temporalDisplay = []
      const { genders, platform, tags, stores } = actions.payload
      for (let i = 0; i < state.allVideoGames.length; i++) {
        let index = []
        if (genders !== 'all') {
          gendersFilter: for (
            let e = 0;
            e < state.allVideoGames[i].genres.length;
            e++
          ) {
            if (state.allVideoGames[i].genres[e].name === genders) {
              index.push(true)
              break gendersFilter
            }
          }
          if (index.length === 0) {
            continue
          }
          index = []
        }

        if (platform !== 'all') {
          platformFilter: for (
            let e = 0;
            e < state.allVideoGames[i].platform.length;
            e++
          ) {
            if (state.allVideoGames[i].platform[e].name === platform) {
              index.push(true)
              break platformFilter
            }
          }
          if (index.length === 0) {
            continue
          }
          index = []
        }

        if (tags !== 'all') {
          tagsFilter: for (
            let e = 0;
            e < state.allVideoGames[i].tags.length;
            e++
          ) {
            if (state.allVideoGames[i].tags[e].name === tags) {
              index.push(true)
              break tagsFilter
            }
          }
          if (index.length === 0) {
            continue
          }
          index = []
        }

        if (stores !== 'all') {
          storesFilter: for (
            let e = 0;
            e < state.allVideoGames[i].stores.length;
            e++
          ) {
            if (state.allVideoGames[i].stores[e].name === stores) {
              index.push(true)
              break storesFilter
            }
          }
          if (index.length === 0) {
            continue
          }
        }
        temporalDisplay.push(state.allVideoGames[i])
      }
      state.displayGames = temporalDisplay
    },
    setFilters: (state, actions) => {
      const { name, value } = actions.payload
      state.filters = { ...state.filters, [name]: value }
      const { genders, platform, tags, stores } = state.filters

      const temporalDisplay = []
      for (let i = 0; i < state.allVideoGames.length; i++) {
        let index = []
        if (genders !== 'all') {
          if (state.allVideoGames[i].genres) {
            gendersFilter: for (
              let e = 0;
              e < state.allVideoGames[i].genres.length;
              e++
            ) {
              if (state.allVideoGames[i].genres[e].name === genders) {
                index.push(true)
                break gendersFilter
              }
            }
            if (index.length === 0) {
              continue
            }
          } else {
            continue
          }
          index = []
        }

        if (platform !== 'all') {
          if (state.allVideoGames[i].platforms) {
            platformFilter: for (
              let e = 0;
              e < state.allVideoGames[i].platforms.length;
              e++
            ) {
              if (state.allVideoGames[i].platforms[e].name === platform) {
                index.push(true)
                break platformFilter
              }
            }
            if (index.length === 0) {
              continue
            }
          } else {
            continue
          }
          index = []
        }

        if (tags !== 'all') {
          if (state.allVideoGames[i]) {
            tagsFilter: for (
              let e = 0;
              e < state.allVideoGames[i].tags.length;
              e++
            ) {
              if (state.allVideoGames[i].tags[e].name === tags) {
                index.push(true)
                break tagsFilter
              }
            }
            if (index.length === 0) {
              continue
            }
          } else {
            continue
          }
          index = []
        }

        if (stores !== 'all') {
          if (state.allVideoGames[i].stores) {
            storesFilter: for (
              let e = 0;
              e < state.allVideoGames[i].stores.length;
              e++
            ) {
              if (state.allVideoGames[i].stores[e].name === stores) {
                index.push(true)
                break storesFilter
              }
            }
            if (index.length === 0) {
              continue
            }
          } else {
            continue
          }
        }
        temporalDisplay.push(state.allVideoGames[i])
      }
      state.displayGames = temporalDisplay
    }
  }
})

export const filterProps = state => state.videogames.filters
export const displayGames = state => state.videogames.displayGames
export const allVideoGames = state => state.videogames.allVideoGames
export const { setVideoGames, filterGames, setFilters } =
  videoGamesSlice.actions
export default videoGamesSlice.reducer

// vamos a crear un display para mostrar las cards filtradas
// se tiene que crear un estado que sera el display
// el cual actuara dependiendo de los filtros
// si todos los filtros estan en all => se mostrara allVideoGames

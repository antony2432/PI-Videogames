import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './pages/Root'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Favorite from './pages/Favorite'
import Gender from './pages/Gender'
import About from './pages/About'
import VideoGame from './pages/VideoGame[id]'
import AddGame from './pages/AddGame'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'app',
    element: <Home />,
    children: [
      {
        path: 'favorite',
        element: <Favorite />
      },
      {
        path: 'gender',
        element: <Gender />
      },
      {
        path: 'videogame/:id',
        element: <VideoGame />
      },
      {
        path: 'addgame',
        element: <AddGame/>
      }
    ]
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <Signup />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)

import { useLocation, Outlet } from 'react-router-dom'
import AppLayout from '../../layout/AppLayout'
import Card from '../../components/Card'
import useVideoGames from '../../hooks/useVideoGames'
import './style.css'

export default function Home() {
  const { loading, search, display } = useVideoGames()
  const { pathname } = useLocation()
  return (
    <AppLayout>
      {pathname === '/app' ? (
        loading && loading ? (
          <div className="spinner"></div>
          // <h1>Loading...</h1>
        ) : search.length === 0 ? (
          <>{display && display.map(g => <Card game={g} key={g.id} />)}</>
        ) : (
          <>{search && search.map(s => <Card game={s} key={s.id} />)}</>
        )
      ) : (
        <Outlet />
      )}
    </AppLayout>
  )
}

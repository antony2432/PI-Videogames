import { useLocation, Outlet } from 'react-router-dom'
import AppLayout from '../../layout/AppLayout'
import Card from '../../components/Card'
import useVideoGames from '../../hooks/useVideoGames'

export default function Home() {
  const { loading, display, search } = useVideoGames()
  const { pathname } = useLocation()
  console.log(search.length)
  return (
    <AppLayout>
      {pathname === '/app' ? (
        loading && loading ? (
          <h1>Loading...</h1>
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

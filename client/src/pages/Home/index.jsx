import { useLocation, Outlet } from 'react-router-dom'
import AppLayout from '../../layout/AppLayout'
import Card from '../../components/Card'
import useVideoGames from '../../hooks/useVideoGames'

export default function Home() {
  const { loading, display } = useVideoGames()
  const { pathname } = useLocation()
  return (
    <AppLayout>
      {pathname === '/app' ? (
        loading && loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {display && display.map(g => (
              <Card game={g} key={g.id} />
            ))}
          </>
        )
      ) : (
        <Outlet />
      )}
    </AppLayout>
  )
}

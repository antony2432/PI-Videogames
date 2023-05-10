import NavbarLP from '../../components/NavbarLP'
import Slice from '../../components/Slice'
import Footer from '../../components/Footer'
import './style.css'

export default function Root() {
  return (
    <div className='landingPage-root'>
      <NavbarLP />
      <main className='landingPage-main'>
        <Slice />
        <hr />
        <section className='landingPage-aud'>
          <article className='landingPage-article-left'>
            <h3>Explora una amplia variedad de videojuegos:</h3>
            <p>
              En RawGames, tenemos más de 500,000 videojuegos diferentes para
              que los usuarios exploren y disfruten. Desde juegos de acción y
              aventura hasta juegos de rol y estrategia, tenemos algo para todos
              los gustos.
            </p>
          </article>
          <article className='landingPage-article-right'>
            <h3>Obtén información detallada de cada juego:</h3>
            <p>
              En RawGames, proporcionamos información detallada sobre cada juego
              en nuestro catálogo, incluyendo características únicas, ranking,
              datos de DLC, y screenshots. Los usuarios pueden tomar una
              decisión informada antes de comprar o descargar un juego.
            </p>
          </article>
          <article className='landingPage-article-left'>
            <h3>Encuentra tu próximo juego favorito:</h3>
            <p>
              Con nuestra amplia variedad de videojuegos y características
              detalladas, RawGames es el lugar perfecto para que los jugadores
              encuentren su próximo juego favorito. Ya sea que estés buscando
              algo nuevo y emocionante o algo más relajado, lo encontrarás aquí
              en RawGames.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

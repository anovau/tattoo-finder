import Searchbar from "../Searchbar/Searchbar";
import armtattoo from "../../images/arm-tattoo.jpeg";
import legtattoo from "../../images/leg-tattoo.jpeg";
import smalltattoo from "../../images/small-tattoo.jpeg";
import backtattoo from "../../images/back-tattoo.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="banner-home">
        <h1>Encuentra el mejor tatuador para tu piel</h1>
        <div className="searchbar-container">
          <Searchbar />
        </div>
      </div>
      <main>
        <h2>¿Necesitas ideas para tu próximo tatuaje?</h2>
        <div className="inspiration">
          <div className="inspiration-image">
            <a href="https://www.pinterest.es/search/pins/?rs=ac&len=2&q=arm%20tattoo&eq=arm%20ta&etslf=4631&term_meta[]=arm%7Cautocomplete%7C0&term_meta[]=tattoo%7Cautocomplete%7C0">
              <img src={armtattoo} alt="Tatuajes brazo" />
              <h3>Brazo</h3>
            </a>
          </div>
          <div>
            <div className="inspiration-image">
              <a href="https://www.pinterest.es/search/pins/?rs=ac&len=2&q=small%20tattoos&eq=small%20tattoo&etslf=3827&term_meta[]=small%7Cautocomplete%7C0&term_meta[]=tattoos%7Cautocomplete%7C0">
                <img src={smalltattoo} alt="Tatuajes pequeños" />
              </a>
              <h3>Tatuajes pequeños</h3>
            </div>
            <div className="inspiration-image">
              <a href="https://www.pinterest.es/search/pins/?q=back%20tattoos&rs=typed&term_meta[]=back%7Ctyped&term_meta[]=tattoos%7Ctyped">
                <img src={backtattoo} alt="Tatuajes espalda" />
              </a>
              <h3>Espalda</h3>
            </div>
          </div>
          <div className="inspiration-image">
            <a href="https://www.pinterest.es/search/pins/?q=leg%20tattoos&rs=typed&term_meta[]=leg%7Ctyped&term_meta[]=tattoos%7Ctyped">
              <img src={legtattoo} alt="Tatuajes pierna" />
            </a>
            <h3>Pierna</h3>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

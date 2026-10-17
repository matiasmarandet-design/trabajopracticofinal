import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Gallery from "../components/Gallery";
import ceratiGuitarra from "../assets/img/cerati guitarra.png";

const products = [
  { nombre: "Riff ST-Classic", categoria: "Eléctrica", precio: "420.000", icono: "🎸", destacado: true },
  { nombre: "Riff Tele Vintage", categoria: "Eléctrica", precio: "465.000", icono: "🎸" },
  { nombre: "Acoustic Rose", categoria: "Acústica", precio: "380.000", icono: "🪕" }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">TU SONIDO. TU IDENTIDAD.</span>
            <h1>Encontrá el instrumento que <em>suena a vos.</em></h1>
            <p>Guitarras, bajos y accesorios seleccionados para músicos que buscan calidad, personalidad y ganas de tocar.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/catalogo">Ver catálogo</Link>
              <Link className="button secondary" to="/contacto">Hablar con nosotros</Link>
            </div>
          </div>
          <div className="hero-art">
            <div className="sun"></div>
            <img className="hero-photo" src={ceratiGuitarra} alt="Gustavo Cerati tocando la guitarra en vivo" />
            <div className="hero-note">SOUND<br/><b>MATTERS.</b></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="SELECCIÓN" title="Nuestros destacados" text="Una selección de instrumentos para empezar a crear tu próximo tema." />
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.nombre} {...product} />)}
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <SectionTitle eyebrow="TODO EN UN SOLO LUGAR" title="Más que una casa de música" text="Te ayudamos a encontrar el equipo que necesitás para tocar, grabar y disfrutar." />
          <Gallery />
        </div>
      </section>

      <section className="cta-section container">
        <div>
          <span className="eyebrow">¿TENÉS UNA DUDA?</span>
          <h2>Hablemos de música.</h2>
        </div>
        <Link className="button primary" to="/contacto">Contactar</Link>
      </section>
    </>
  );
}
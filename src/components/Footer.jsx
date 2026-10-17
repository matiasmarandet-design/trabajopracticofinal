import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">RH</span><span>RIFF <b>HOUSE</b></span></div>
          <p>Instrumentos, accesorios y pasión por la música.</p>
        </div>
        <div>
          <h4>Secciones</h4>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>Buenos Aires, Argentina</p>
          <p>hola@riffhouse.com</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Riff House — Proyecto académico de React.</div>
    </footer>
  );
}
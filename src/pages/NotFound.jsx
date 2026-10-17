import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-section container not-found">
      <span className="eyebrow">ERROR 404</span>
      <h1>Parece que esta página desafinó.</h1>
      <p>La sección que buscás no existe.</p>
      <Link className="button primary" to="/">Volver al inicio</Link>
    </section>
  );
}
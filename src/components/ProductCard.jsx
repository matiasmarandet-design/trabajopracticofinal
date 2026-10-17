import { Link } from "react-router-dom";
import riffSTClassic from "../assets/img/Riff ST-Classic.jpg";
import riffTeleVintage from "../assets/img/Riff Tele Vintage.png";
import riffLPHeritage from "../assets/img/Riff LP Heritage.png";
import acousticRose from "../assets/img/Acoustic Rose.png";
import bass4Classic from "../assets/img/bass 4 classic.png";
import amp30WStage from "../assets/img/Amp 30W Stage.png";

const productImages = {
  "Riff ST-Classic": riffSTClassic,
  "Riff Tele Vintage": riffTeleVintage,
  "Riff LP Heritage": riffLPHeritage,
  "Acoustic Rose": acousticRose,
  "Bass 4 Classic": bass4Classic,
  "Amp 30W Stage": amp30WStage
};

export default function ProductCard({ nombre, categoria, precio, icono, destacado }) {
  const image = productImages[nombre];

  return (
    <article className="product-card">
      <div className="product-image">
        {destacado && <span className="badge">DESTACADO</span>}
        {image ? (
          <img className="product-photo" src={image} alt={nombre} loading="lazy" />
        ) : (
          <span className="instrument-icon" aria-hidden="true">{icono}</span>
        )}
      </div>
      <div className="product-info">
        <span className="category">{categoria}</span>
        <h3>{nombre}</h3>
        <div className="product-row">
          <strong>${precio}</strong>
          <Link className="small-button" to={`/contacto?producto=${encodeURIComponent(nombre)}`}>
            Consultar
          </Link>
        </div>
      </div>
    </article>
  );
}
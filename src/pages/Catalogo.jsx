import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";

const products = [
  { nombre: "Riff ST-Classic", categoria: "Eléctrica", precio: "420.000", icono: "🎸", destacado: true },
  { nombre: "Riff Tele Vintage", categoria: "Eléctrica", precio: "465.000", icono: "🎸" },
  { nombre: "Riff LP Heritage", categoria: "Eléctrica", precio: "590.000", icono: "🎸", destacado: true },
  { nombre: "Acoustic Rose", categoria: "Acústica", precio: "380.000", icono: "🪕" },
  { nombre: "Bass 4 Classic", categoria: "Bajo", precio: "510.000", icono: "🎸" },
  { nombre: "Amp 30W Stage", categoria: "Amplificación", precio: "275.000", icono: "🔊" }
];

export default function Catalogo() {
  return (
    <section className="page-section container">
      <SectionTitle eyebrow="CATÁLOGO" title="Instrumentos para cada escenario" text="Explorá nuestra selección de guitarras, bajos y equipos." />
      <div className="product-grid catalog-grid">
        {products.map((product) => <ProductCard key={product.nombre} {...product} />)}
      </div>
    </section>
  );
}
const gallery = [
  { icon: "🎸", title: "Guitarras eléctricas", text: "Sonido y carácter para cada estilo." },
  { icon: "🎼", title: "Acústicas", text: "Maderas seleccionadas y gran proyección." },
  { icon: "🎚️", title: "Accesorios", text: "Todo lo necesario para tocar." },
  { icon: "🔊", title: "Amplificación", text: "Potencia tu sonido en cualquier escenario." }
];

export default function Gallery() {
  return (
    <div className="gallery">
      {gallery.map((item) => (
        <div className="gallery-item" key={item.title}>
          <span>{item.icon}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
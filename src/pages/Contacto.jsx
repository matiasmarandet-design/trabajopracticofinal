import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <section className="page-section container">
      <div className="contact-layout">
        <div>
          <SectionTitle eyebrow="CONTACTO" title="Contanos qué estás buscando." text="Completá el formulario y te ayudamos a encontrar el instrumento o accesorio ideal." />
          <div className="contact-info">
            <div><span>📍</span><div><b>Ubicación</b><p>Buenos Aires, Argentina</p></div></div>
            <div><span>✉️</span><div><b>Email</b><p>hola@riffhouse.com</p></div></div>
            <div><span>🎸</span><div><b>Atención</b><p>Lunes a sábado · 10 a 19 h</p></div></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
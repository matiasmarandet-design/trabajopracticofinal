import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const producto = searchParams.get("producto");
  const initialForm = {
    nombre: "",
    email: "",
    mensaje: producto ? `Hola, quisiera consultar por ${producto}.` : ""
  };
  const [form, setForm] = useState(initialForm);
  const [correoPreparado, setCorreoPreparado] = useState(false);

  const correoUrl = `mailto:hola@riffhouse.com?subject=${encodeURIComponent(
    producto ? `Consulta por ${producto}` : "Consulta desde Riff House"
  )}&body=${encodeURIComponent(
    `Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`
  )}`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setCorreoPreparado(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCorreoPreparado(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setCorreoPreparado(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="form-row">
        <label>
          Nombre
          <input autoComplete="name" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
        </label>
        <label>
          Email
          <input autoComplete="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" required />
        </label>
      </div>

      <label>
        Mensaje
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" rows="6" required />
      </label>

      <div className="form-actions">
        <button className="button primary" type="submit">Preparar consulta</button>
        <button className="button secondary" type="reset">Limpiar</button>
      </div>

      {correoPreparado && (
        <div className="success-message" role="status">
          <p>Tu consulta está lista. Abrí tu aplicación de correo para enviarla:</p>
          <a href={correoUrl}>Enviar a hola@riffhouse.com</a>
        </div>
      )}
    </form>
  );
}
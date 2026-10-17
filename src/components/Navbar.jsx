import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">RH</span>
          <span>RIFF <b>HOUSE</b></span>
        </NavLink>

        <nav id="main-navigation" className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Navegación principal">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/catalogo" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Catálogo</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        </nav>

        <NavLink to="/contacto" className="nav-cta" onClick={() => setMenuOpen(false)}>Consultanos</NavLink>
        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
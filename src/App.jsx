
import { useState } from "react";

const profile = {
  name: "José Ignacio Segovia Ramírez",
  role: "Desarrollador Web Junior",
  email: "josegoviaramirez@gmail.com",
  github: "https://github.com/joseignaciosegovia",
  cv: "/cv.pdf",
};

const skillGroups = [
  { title: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React (este portfolio)"] },
  { title: "Back-end", items: ["PHP", "Laravel", "Livewire", "Volt", "Stripe"] },
  { title: "Bases de datos", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { title: "Testing y calidad", items: ["PHPUnit", "Mockery", "GitHub Actions"] },
  { title: "Herramientas", items: ["Git", "GitHub", "Docker", "Composer", "Render"] },
];

const projects = [
  {
    title: "Mi proyecto final DAW",
    description:
      "Aplicación web para reservar pistas deportivas de un municipio, desarrollada durante mis prácticas en el Ayuntamiento de Moral de Calatrava. Los clientes reservan y pagan online con Stripe (Checkout, webhooks y reembolsos), y el personal gestiona pistas, reservas y cancelaciones desde un panel con tres roles: cliente, gestor y administrador.",
    highlights: ["367 tests automatizados", "94 % de cobertura", "CI con GitHub Actions"],
    technologies: ["Laravel", "Livewire", "Stripe", "PHPUnit", "MySQL"],
    demo: "https://sports-court-booking-1.onrender.com/",
    github: "https://github.com/joseignaciosegovia/sports-court-booking",
    image: "/images/project-preview.png",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a className="logo" href="#inicio" onClick={closeMenu}>
        {profile.name}<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {[
          ["Sobre mí", "#sobre-mi"],
          ["Tecnologías", "#tecnologias"],
          ["Proyectos", "#proyectos"],
          ["Contacto", "#contacto"],
        ].map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-content">
        <span className="availability">
          <span className="status-dot" />
          Disponible para oportunidades · Remoto / Híbrido
        </span>

        <p className="eyebrow">HOLA, SOY</p>

        <h1>
          {profile.name}
          <span>.</span>
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-description">
          Desarrollo aplicaciones web con Laravel, 
          pagos online y tests automatizados. Busco 
          mi primera oportunidad profesional para
          seguir creciendo como desarrollador.
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="button button-primary">
            Ver mis proyectos ↗
          </a>

          <a
            href={profile.cv}
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Descargar CV ↓
          </a>
        </div>

        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={`mailto:${profile.email}`}>
            Email ↗
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/foto-perfil.jpg"
          alt={`Fotografía de ${profile.name}`}
        />
        <div className="image-decoration" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="section-heading">
        <span className="eyebrow">01 / SOBRE MÍ</span>
        <h2>Un poco sobre mí</h2>
      </div>

      <div className="about-content">
        <p>
          Soy desarrollador web titulado en el ciclo
          superior de Desarrollo de Aplicaciones Web (DAW).
        </p>

        <p>
          Como proyecto de fin de ciclo, desarrollé yo solo, 
          durante mis prácticas en el Ayuntamiento de Moral 
          de Calatrava, una aplicación de reservas con pagos 
          online y panel de gestión pensada para ofrecer un 
          servicio real a mi municipio. Con ella aprendí a 
          estructurar el código para que sea escalable y 
          fácil de mantener, a integrar pagos con Stripe 
          y a trabajar con tests automatizados.
        </p>

        <p>
          Disfruto resolviendo problemas lógicos y técnicos, 
          y me gusta escribir código ordenado, documentado y 
          probado. Busco incorporarme a un equipo donde pueda 
          aportar, aprender de compañeros con más experiencia 
          y seguir creciendo profesionalmente. Busco principalmente 
          trabajo en remoto, aunque estoy abierto a otras modalidades.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="tecnologias">
      <div className="section-heading">
        <span className="eyebrow">02 / TECNOLOGÍAS</span>
        <h2>Mi stack tecnológico</h2>
        <p>
          Herramientas y tecnologías con las que he trabajado
          durante mi formación y mis proyectos.
        </p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="section-heading">
        <span className="eyebrow">03 / PROYECTOS</span>
        <h2>Trabajo destacado</h2>
        <p>
          Proyectos en los que he puesto en práctica
          mis conocimientos de desarrollo web.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
              />
            </div>

            <div className="project-info">
              <span className="project-type">
                PROYECTO PERSONAL · DAW
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Ver aplicación ↗
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Ver código ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <span className="eyebrow">04 / CONTACTO</span>
      <h2>¿Hablamos?</h2>

      <p>
        Estoy buscando mi primera oportunidad profesional
        en desarrollo web. Si tienes una propuesta o quieres
        conocer mi trabajo, estaré encantado de escucharte.
      </p>

      <a href={`mailto:${profile.email}`} className="button button-primary">
        Contactar por email ↗
      </a>

      <div className="contact-info">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <p className="contact-meta">Castilla-La Mancha, España · Remoto / Híbrido</p>
      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Desarrollado con React + Vite</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

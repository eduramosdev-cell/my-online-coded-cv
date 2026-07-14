import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '0 20px', color: '#333', lineHeight: '1.6' }}>
      
      {/* HEADER SECTION */}
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', color: '#1a1a1a' }}>[Tu Nombre Aquí]</h1>
        <h1 className="text-3xl font-bold underline text-blue-600">Tailwind is working!</h1>
        <p style={{ fontSize: '1.2rem', margin: '0', color: '#666', fontWeight: '500' }}>
          Aspiring Frontend Developer | React | Git & GitHub
        </p>
        <div style={{ marginTop: '15px' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none', marginRight: '15px' }}>GitHub</a>
          <a href="mailto:tu-email@email.com" style={{ color: '#0066cc', textDecoration: 'none' }}>Email</a>
        </div>
      </header>

      {/* ABOUT ME SECTION */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#1a1a1a', borderBottom: '1px solid #eaeaea', paddingBottom: '5px' }}>Sobre Mí</h2>
        <p>
          Estoy construyendo este currículum online utilizando React y JSX para demostrar mis habilidades prácticas en desarrollo frontend, arquitectura de componentes y despliegues automatizados en la nube. Buscando mi primera oportunidad laboral como Desarrollador Frontend.
        </p>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#1a1a1a', borderBottom: '1px solid #eaeaea', paddingBottom: '5px' }}>Habilidades Técnicas</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
          {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'JSX', 'Git', 'GitHub', 'Netlify'].map((skill) => (
            <span key={skill} style={{ backgroundColor: '#f4f4f4', padding: '5px 12px', borderRadius: '15px', fontSize: '0.9rem', fontWeight: '500' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <h1 className="logo">Panadería Dulce Pan</h1>
          <nav className="nav">
            <a href="#">Inicio</a>
            <a href="#">Catálogo</a>
            <a href="#">Sobre</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h2>¡Bienvenidos a Panadería Dulce Pan!</h2>
          <p>Pan artesanal fresco todos los días</p>
          <button className="cta-button">Explora Nuestro Catálogo</button>
        </div>
      </section>

      {/* Ofertas del Día */}
      <section className="offers container">
        <h2 className="section-title">Ofertas del Día</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <img src="/images/offer1.png" alt="Pan Integral Fresco" />
            <h3>Pan Integral Fresco</h3>
            <p className="price">$5.99</p>
            <button className="add-button">Agregar al Carrito</button>
          </div>
          <div className="offer-card">
            <img src="/images/offer2.png" alt="Croissant Artesanal" />
            <h3>Croissant Artesanal</h3>
            <p className="price">$3.50</p>
            <button className="add-button">Agregar al Carrito</button>
          </div>
          <div className="offer-card">
            <img src="/images/offer3.png" alt="Torta de Chocolate" />
            <h3>Torta de Chocolate</h3>
            <p className="price">$12.00</p>
            <button className="add-button">Agregar al Carrito</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>Contacto: info@dulcepan.com | Tel: +593 444 4444</p>
          <p>&copy; 2025 Panadería Dulce Pan. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import "../App.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // <- Importa Link

function Home() {
    const { addToCart } = useContext(CartContext);

    return (
      <>
        {/* Hero Banner */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h2>¡Bienvenidos a Panadería Dulce Pan!</h2>
            <p>Pan artesanal fresco todos los días</p>
            <Link to="/catalogo">
              <button className="cta-button">Explora Nuestro Catálogo</button>
            </Link>
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
              <button
                className="add-button"
                onClick={() =>
                  addToCart({ name: "Pan Integral Fresco", price: "$5.99" })
                }
              >
                Agregar al Carrito
              </button>
            </div>

            <div className="offer-card">
              <img src="/images/offer2.png" alt="Croissant Artesanal" />
              <h3>Croissant Artesanal</h3>
              <p className="price">$3.50</p>
              <button
                className="add-button"
                onClick={() =>
                  addToCart({ name: "Croissant Artesanal", price: "$3.50" })
                }
              >
                Agregar al Carrito
              </button>
            </div>

            <div className="offer-card">
              <img src="/images/offer3.png" alt="Torta de Chocolate" />
              <h3>Torta de Chocolate</h3>
              <p className="price">$12.00</p>
              <button
                className="add-button"
                onClick={() =>
                  addToCart({ name: "Torta de Chocolate", price: "$12.00" })
                }
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default Home;


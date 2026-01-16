import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Catalog.css";

/* 1️Productos (VA AQUÍ, ARRIBA) */
const products = [
  { 
    name: "Baguette Clásica", 
    price: "$4.00", 
    category: "panes",
    image: "/images/baguette.png" 
  },
  { 
    name: "Croissant Simple", 
    price: "$2.50", 
    category: "panes",
    image: "/images/croissant.png" 
  },
  { 
    name: "Torta de Queso", 
    price: "$8.00", 
    category: "postres",
    image: "/images/torta-queso.png" 
  },
  { 
    name: "Donas Azucaradas", 
    price: "$1.80", 
    category: "postres",
    image: "/images/donas.png" 
  },
  { 
    name: "Café Americano", 
    price: "$1.50", 
    category: "bebidas",
    image: "/images/cafe.png" 
  },
];


function Catalog() {
  /* 2️Estado del filtro */
  const [filter, setFilter] = useState("all");

  /* 3 Filtrado automático */
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(product => product.category === filter);

  return (
    <div className="container">
      <h2 className="section-title">Catálogo</h2>

      <div className="catalog-layout">
        {/* 4️Filtros */}
        <aside className="filters">
          <h3>Filtros</h3>
            <ul>
                <li
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
                >
                    Todos
                </li>

                <li
                className={filter === "panes" ? "active" : ""}
                onClick={() => setFilter("panes")}
                >
                    Panes Artesanales
                </li>

                <li
                    className={filter === "postres" ? "active" : ""}
                    onClick={() => setFilter("postres")}
                >
                    Postres
                </li>

                <li
                    className={filter === "bebidas" ? "active" : ""}
                    onClick={() => setFilter("bebidas")}
                >
                    Bebidas
                </li>
            </ul>

        </aside>

        {/* 5️Productos filtrados */}
        <section className="products-grid">
        {filteredProducts.map((product, index) => (
            <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image} // <-- añadimos esta línea
            />
        ))}

        </section>
      </div>
    </div>
  );
}

export default Catalog;

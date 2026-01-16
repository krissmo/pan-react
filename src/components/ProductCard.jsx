import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, image }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4>{name}</h4>
      <p>{price}</p>
      <button
        className="add-button"
        onClick={() => addToCart({ name, price })}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;


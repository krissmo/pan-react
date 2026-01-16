import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Pedidos() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, total } =
    useContext(CartContext);

  return (
    <div className="container pedidos">

      <h2 className="section-title">Mis Pedidos</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="product-card">
              <h4>{item.name}</h4>
              <p>{item.price}</p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <button
                    className="cart-btn"
                    onClick={() => decreaseQuantity(item.name)}
                >
                    ➖
                </button>

                <span>{item.quantity}</span>

                <button
                    className="cart-btn"
                    onClick={() => addToCart(item)}
                >
                    ➕
                </button>

                
              </div>

                <button
                    className="cart-btn"
                    onClick={() => removeFromCart(item.name)}
                >
                    Quitar
                </button>

            </div>
          ))}

          <h3 style={{ marginTop: "2rem" }}>
            Total: <strong>${total.toFixed(2)}</strong>
          </h3>
        </>
      )}
    </div>
  );
}

export default Pedidos;

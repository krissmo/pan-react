import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Pedidos from "./pages/Pedidos";
import Contacto from "./pages/Contacto";       // ← nuevo import

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/contacto" element={<Contacto />} />   {/* ← nueva ruta */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
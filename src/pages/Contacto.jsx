import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contacto.css'; // Crea este archivo con los estilos que te doy abajo

const Contacto = () => {
  return (
    <div className="contacto-page">
      <div className="contacto-header">
        <h1>Contacto</h1>
        <p className="subtitle">
          Nos encantaría saber de ti. ¡Escríbenos o visítanos!
        </p>
      </div>

      <div className="contacto-grid">
        {/* Columna información */}
        <div className="contact-info">
          <div className="info-card">
            <h2>Panadería Dulce Pan</h2>
            
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <strong>Dirección</strong>
                <p>[Tu dirección real aquí - Ej: Av. 9 de Octubre 123, Guayaquil]</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="icon" />
              <div>
                <strong>Horario</strong>
                <p>Lunes a Sábado: 6:00 - 20:00</p>
                <p>Domingos: 7:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>Contáctanos directamente</h2>
            
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <strong>Teléfono / WhatsApp</strong>
                <p>+593 99 999 9999</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <strong>Email</strong>
                <p>dulcepanguayaquil@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna formulario */}
        <div className="contact-form-container">
          <div className="form-card">
            <h2>Envíanos un mensaje</h2>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Tu nombre completo"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  placeholder="+593 ..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="tucorreo@ejemplo.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5"
                  placeholder="¿En qué podemos ayudarte hoy?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar">
                <FaPaperPlane className="btn-icon" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Área futura para mapa */}
      <div className="map-section">
        <h3>Encuéntranos aquí</h3>
        <div className="map-placeholder">
          <p>[Mapa de Google o imagen del local - próximamente]</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
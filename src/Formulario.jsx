import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="textarea"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">Enviar</button>
    </form>
  );
}

export default Formulario;

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData);
      const { token } = response.data;

      localStorage.setItem('token', token);

      window.location.href = '/dashboard'; // o redirección adecuada
    } catch (err) {
      setError('Error al registrar. Verifique los datos e intente de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 shadow-lg rounded-xl bg-white">
      <h2 className="text-xl font-semibold mb-4">Registro</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1">Nombre</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1">Apellidos</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Registrarse
      </button>
    </form>
  );
};

export default Register;
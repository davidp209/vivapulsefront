import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  if (localStorage.getItem('token')) {
    // Si ya hay un token, redirige al usuario a la página principal
    window.location.href = '/dashboard';
  } 
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://vivapulse-backend.onrender.com/api/auth/authenticate', credentials);
      const { token } = response.data;

      // Guarda el token (puedes usar localStorage o cookies seguras)
      localStorage.setItem('token', token);

      // Redirige o actualiza el estado de autenticación
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Correo o contraseña incorrectos.');
    }

  }
  ;

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 shadow-lg rounded-xl bg-white ">
      <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Entrar
      </button>
    </form>
  );
};

export default Login;
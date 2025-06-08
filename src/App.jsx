import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Descubre from './pages/Descubre/Descubre'
import Nosotros from './pages/Nosotros/Nosotros'
import Contacto from './pages/Contacto/Contacto'
import Dashboard from './pages/Dashboard/Dashboard'
import Alimentos from './pages/Alimentos/Alimentos'
import Training from './pages/Training/Training'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad/PoliticaPrivacidad'
import TerminosCondiciones from './pages/TerminosCondiciones/TerminosCondiciones'
import LicenciaUso from './pages/LicenciaUso/LicenciaUso'
import PoliticaCookies from './pages/PoliticaCookies/PoliticaCookies'
import FloatingActions from './components/FloatingActions/FloatingActions'
import Chat from './components/Chat/Chat'
import AlimentosPriv from './pages/AlimentosPriv/AlimentosPriv'
import Carrito from './pages/Carrito/Carrito'
import { CarritoProvider } from "./context/CarritoContext";
import Pruebas from './pages/pruebas/pruebas'

function App() {
  return (
    <CarritoProvider>
      <div >
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descubre" element={<Descubre />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aliments" element={<Alimentos />} />
          <Route path="/training" element={<Training />} />
          <Route path="/PoliticaPrivacidad" element={<PoliticaPrivacidad />} />
          <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
          <Route path="/LicenciaUso" element={<LicenciaUso />} />
          <Route path="/PoliticaCookies" element={<PoliticaCookies />} />
          <Route path="/chat" element={<Chat></Chat>} />
          <Route path="/alimentosPriv" element={<AlimentosPriv />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pruebas" element={<Pruebas />} />
          {/* Rutas adicionales */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <FloatingActions></FloatingActions>


        <Footer></Footer>

      </div>
    </CarritoProvider>
  );
}

export default App

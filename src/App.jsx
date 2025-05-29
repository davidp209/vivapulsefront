
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

function App() {

  return (
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>


      <Footer></Footer>

    </div>
  )
}

export default App

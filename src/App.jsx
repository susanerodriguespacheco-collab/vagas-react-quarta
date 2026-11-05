import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import VagaDetalhe from './pages/VagaDetalhe'
import './App.css'


function App() {
  

  return (
   <Routes>
    <Route index element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/vaga/:id" element={<VagaDetalhe />} />
    <Route path="*" element={<Page404 />} />
   </Routes>
  )
}

export default App
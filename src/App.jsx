import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
//import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Cadastro" element={<Cadastro/>}/>
          <Route path="Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

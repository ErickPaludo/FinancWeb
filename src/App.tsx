import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/Login/Login";
import Contas from "./Paginas/Contas/Contas";
import CadContas from "./Paginas/Cadastros/Contas/CadContas";
import MinhaConta from "./Paginas/MinhaConta/MinhaConta";

function App() {

  return (
    <BrowserRouter basename="/FinancWeb">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Contas" element={<Contas />} />
        <Route path="/CadastroContas" element={<CadContas />} />
        <Route path="/MinhaConta" element={<MinhaConta />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

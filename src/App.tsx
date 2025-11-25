import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/Login/Login";
import Contas from "./Paginas/Contas/Contas";

function App() {

  return (
    <BrowserRouter basename="/FinancWeb">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/MinhasContas" element={<Contas />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

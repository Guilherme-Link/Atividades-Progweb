import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Conteudo from "./pages/Conteudo";
import Sobre from "./pages/Sobre";
import './App.css'
function App(){
  return(
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}
export default App;

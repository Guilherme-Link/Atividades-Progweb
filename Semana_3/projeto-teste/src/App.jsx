import { useState } from 'react'
import './App.css'
import Header from './componentes/Header.jsx'
import Card from './componentes/Card.jsx'
import Footer from './componentes/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  var nome = "Guilherme";

  function Somar(n1,n2){
    return n1 + n2;
  }

  function cliqueBotao(){
    alert("Você clicou no botão!")
  }

  return (
    <div>
      <Header/>
      <Card 
        titulo="React" 
        descricao="Biblioteca para interfaces"
        imagem="https://imgs.search.brave.com/Je2tlrAPatL7GgRlXSawYlbnhrxQavm6TVDBIqzJ5rY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dHJpZm9yY2V3aWtp/LmNvbS90aHVtYi9i/L2IxL0VvV19Ucmlm/b3JjZV9Nb2RlbC5w/bmcvMjUwcHgtRW9X/X1RyaWZvcmNlX01v/ZGVsLnBuZw"
      />
      <Card titulo="Javascript" descricao="Linguagem base do React"/>
      <Card titulo="Vite" descricao="Ferramenta de build rápida"/>
      <Footer/>
    </div>
  )
}

export default App

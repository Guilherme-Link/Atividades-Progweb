import { useState } from 'react'
import './App.css'
import Apresentacao from './componentes/Apresentacao'

function App() {
  const [count, setCount] = useState(0)

  var nome = "Guilherme";

  function Somar(n1,n2){
    return n1 + n2;
  }

  function cliqueBotao(){
    alert("Alerta!")
  }

  return (
    <div>
      <h1>Meu nome é {nome}</h1>
      <p>Eu estou aprendendo react como parte da carga curricular da faculdade de Análise e Desenvolvimento de Sistemas</p>
      <Apresentacao/>
      <button onClick={(cliqueBotao)}>Clique aqui para ver um alerta!</button>
    </div>
    
  )
}

export default App

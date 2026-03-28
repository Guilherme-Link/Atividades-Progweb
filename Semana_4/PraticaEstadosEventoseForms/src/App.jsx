import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import { CampoTexto } from './components/CampoTexto'
import { ListaNomes } from './components/ListaNomes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaNomes/>
    </>
  )
}

export default App

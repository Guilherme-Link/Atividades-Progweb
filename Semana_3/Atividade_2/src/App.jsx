//import './App.css'
import './style.css'
import Index from './componentes/Index'
import Sobre from './componentes/Sobre'
import Curriculum from './componentes/Curriculum'
import { useState } from 'react';

function App() {

  const [view, setView] = useState('Index');

  return (
    <div class='main-container'>
      
      <nav>
            <ul>
                <li><a onClick={() => setView('Sobre')}>Sobre mim</a></li>
                <li><a onClick={() => setView('Curriculum')}>Curriculum Vitae</a></li>
                <li><a onClick={() => setView('Motivacao')}>Motivação</a></li>
                <li><a onClick={() => setView('Trabalhos')}>Trabalhos</a></li>
                <li><a onClick={() => setView('Contato')}>Contato</a></li>
            </ul>
        </nav>
        <main>
          {view == 'Index' && <Index/>}
          {view == 'Sobre' && <Sobre/>}
          {view == 'Curriculum' && <Curriculum/>}
        </main>
    </div>
    
  )
}

export default App

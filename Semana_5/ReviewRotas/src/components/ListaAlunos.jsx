import { useState } from 'react'

function ListaAlunos(){
    /*
    const alunos = ["Flávio", "Vítor", "Murilo", "Camila"];

    return(<div>
        <h2>Lista alunos</h2>
        <ul>
            {alunos.map((alunos,index) => (
                <li key = {index}>{alunos}</li>
            ))}
        </ul>
    </div>);
    */

    const [aluno,setAluno] = useState("");
    const [listaAlunos,setListaAlunos] = useState([]);

    function adicionarAlunos(){
        if(aluno.trim()=== "") return;
        setListaAlunos([...listaAlunos,aluno]);
    }

    return(
        <div>
            <input 
            type="text" 
            value={aluno} 
            onChange={(e) => setAluno(e.target.value)}
            />
            <button onClick={adicionarAlunos}>Adicionar</button>
            {
                listaAlunos.length === 0 
                ? (
                    <p>Nenhum aluno cadastrado</p>
                )
                : (
                    <ul>
                        {listaAlunos.map((a,index) => (
                        <li key={index}>{a}</li>
                        ))}
                    </ul>
                )
            }

        </div>
    )
}
export default ListaAlunos
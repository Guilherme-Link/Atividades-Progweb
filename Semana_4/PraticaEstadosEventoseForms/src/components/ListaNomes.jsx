import {useState} from 'react'

export function ListaNomes(){
    const[nome,setNome]=useState("");
    const[lista,setList]=useState([]);

    function adicionarNome(){
        if(nome.trim()==="") return;
        setList([...lista,nome]);
        setNome("");
    }

    return(
        <div>
            <input type="text"
            value={nome}
            onchange={e=>setNome(e.target.value)}
            />

            <button onClick={adicionarNome}>Adicionar</button>
            <ul>
                {lista.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
    
}
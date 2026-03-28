import {useState} from 'react'

export function CampoTexto(){
    const[nome,setNome]=useState("")

    function handleChange(event){
        setNome(event.target.value);
    }

    return(
        <div>
            <input type='text'
            placeholder="Digite o seu nome"
            value={nome}
            onChange={handleChange}/>

            <p>Você digitou: {nome}</p>
        </div>
    )
    
}
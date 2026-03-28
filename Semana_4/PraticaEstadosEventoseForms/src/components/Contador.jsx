import { useState } from "react";
function Contador(){

    const[contador,setContador] = useState(0);

    function aumentarContador(){
        setContador(contador + 1);
        console.log("Adicionou! Total: " + contador)
    }

    function diminuirContador(){
        if (contador > 0){
            setContador(contador - 1);
            console.log("Subtraiu! Total: " + contador)
        }
        else console.log("Não pode negativo!")
    }

    function zerarContador(){
       setContador(0);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={aumentarContador}>Adicionar</button>
            <button onClick={diminuirContador}>Remover</button>
            <button onClick={zerarContador}>Zerar</button>
        </div>
    )
}
export default Contador
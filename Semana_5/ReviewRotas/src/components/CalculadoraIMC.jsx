import {useState} from 'react'

function CalculadoraIMC(){
    const[peso,setPeso]=useState(0);
    const[altura,setAltura]=useState(0);
    const[IMC,setIMC]=useState(0);

    function atualizarPeso(event){
        setPeso(event.target.value);
        recalcular();
    }

    function atualizarAltura(event){
        setAltura(event.target.value);
        recalcular();
    }

    function recalcular(){
        setIMC(peso / (altura * altura));
    }

    return(
        <div>
            <p>Digite seu peso em kg:</p>
            <input type='number'
            placeholder="ex: 75"
            value={peso}
            onChange={atualizarPeso}/>

            <p>Digite sua altura em m:</p>
            <input type='number'
            placeholder="ex: 1,80"
            value={altura}
            onChange={atualizarAltura}/>

            <p>Seu IMC é: {IMC}</p>
        </div>
    )
    
}
export default CalculadoraIMC
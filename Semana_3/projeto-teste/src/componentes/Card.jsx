function Card({titulo, descricao, imagem}){
    return(
        <div>
            <img src={imagem} width="100"/>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}
export default Card
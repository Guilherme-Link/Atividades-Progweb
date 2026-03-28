import { useState } from "react";

function BotaoLike(){
    const [likes,setLike] = useState(0);

    function curtir(){
        setLike(likes+1);
    }

    return(
        <div>
            <button onClick={curtir}>Curtir 👍</button>

            <p>{likes} curtidas</p>
        </div>
    );
}
export default BotaoLike

import Perfil from "../jsx/perfil.jsx";
function CartaoCatalogo(props) {
    
    return(
        <div className="cartaoCatalogo">
            
            <Perfil foto={props.foto} nome={props.nome}/>
            <h3>{props.nome} </h3>
            <p>{props.descricao}</p>
            <p>Preço R$:{props.preco}</p>

             
        </div>
    );
}

export default CartaoCatalogo;
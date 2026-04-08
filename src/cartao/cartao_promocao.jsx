
import Perfil from "../jsx/perfil.jsx";

function CartaoPromocao(props) {


  return (
    <div className="cartaoPromocao">

      <div>🔥 PROMOÇÃO</div>

        
            <Perfil foto={props.foto} nome={props.nome}/>
            <h3>{props.nome} </h3>
            <p>{props.descricao}</p>

          
    <span className="preco-antigo">
       
        <p>Preço Antigo R$: {props.precoAntigo}</p> 
    </span>

    <span className="preco-atual">
       
        <p>Preço Atual R$: {props.precoAtual}</p> 
    </span>
</div>
    
  );
}

export default CartaoPromocao;
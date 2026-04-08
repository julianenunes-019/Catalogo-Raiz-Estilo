import '../css/App.css'
import { useState } from "react";

import Topo from './topo.jsx';
import Rodape from './Rodape.jsx';
import Slideshow from './slideshow.jsx';

import CartaoInicio from '../cartao/cartao_inicio.jsx';
import CartaoCatalogo from '../cartao/cartao_catalogo.jsx';
import CartaoPromocao from '../cartao/cartao_promocao.jsx';
import CartaoContato from '../cartao/cartao_contato.jsx';

import Catalogo from '../dados/dados_catalogo.js';
import Promocao from '../dados/dados_promocao.js';
import Contatos from '../dados/dados_contato.js';


function App() {
const [pagina, setPagina] = useState("inicio");
const promocoes = Promocao;

  return (
    <>
     
    <Topo setPagina={setPagina} />
    <Slideshow />

 {pagina === "inicio" && <CartaoInicio />}
    

{pagina === "catalogo" && ( <section className="catalogo"> 
  <div className='container'>
     {Catalogo.map((catalogo) => {
      return <CartaoCatalogo
       foto={catalogo.foto} 
       nome={catalogo.nome} 
       descricao={catalogo.descricao} 
       preco={catalogo.preco} 
       />;
})}
</div>
</section>
 )}  


{pagina === "promocoes" && (
  <section className="promocoes">

    <div className="container">

      {promocoes.map((pro) => (
        <CartaoPromocao
          key={pro.id}
          foto={pro.foto}
          nome={pro.nome}
          descricao={pro.descricao}
          precoAntigo={pro.precoAntigo}
          precoAtual={pro.precoAtual}
        />
      ))}

    </div>

  </section>
)}

{pagina === "contato" && (
<section>
   
       <div className="container">
       
       {Contatos.map((contatos)=>{
    return <CartaoContato
    foto={contatos.foto}
     email={contatos.email}
    telefone={contatos.telefone}
    endereco={contatos.endereco}
    />;
})}
</div>
</section>
 )}
 
 <Rodape/>
   
      </>
   
);
}  

export default App;



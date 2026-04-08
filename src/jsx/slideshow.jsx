import { useState, useEffect } from 'react';
import imagem1 from "../imagens/banner1.png";
import imagem2 from "../imagens/banner2.png";


function Slideshow(){
    const imagens = [imagem1, imagem2];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1)% imagens.length);
    };

     const voltarSlide= () => {
     setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
    };

      useEffect(() => {
        const interval = setInterval(proximoSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
  <div className="slideshow">

    <button className="seta esquerda" onClick={voltarSlide}>
      ❮
    </button>

    <img 
      src={imagens[indiceAtual]} 
      alt={`Imagem ${indiceAtual + 1}`} 
    />

    <button className="seta direita" onClick={proximoSlide}>
      ❯
    </button>

    <div className="bolinhas">
      {imagens.map((_, index) => (
        <span
          key={index}
          className={`bolinha ${index === indiceAtual ? "ativa" : ""}`}
        ></span>
      ))}
    </div>

  </div>
);
}

export default Slideshow;

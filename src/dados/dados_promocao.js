import foto1 from '../imagens/box.jpg';
import foto2 from '../imagens/goddes.jpg';
import foto3 from '../imagens/fulani.jpg';

const Promocao = [
  {
    id: 1,
    foto: foto1,
    nome: "Box Braids",
    descricao: "Tranças individuais com extensão, estilo versátil e duradouro.",
    precoAntigo: 180,
    precoAtual: 100,
    promocao: true
  },
  {
      id: 2,
      foto: foto2,
      nome: "Goddess Braids",
      descricao: "Tranças grandes com fios soltos para um visual elegante.",
      precoAntigo: 200,
      precoAtual: 150,
    promocao: true
  },

  {
    id: 3,
    foto: foto3,
    nome: "Fulani Braids",
    descricao: "Mix de nagô na frente e box braids soltas, estilo africano.",
    precoAntigo: 100,
    precoAtual: 80,
    promocao: true
  }
];

export default Promocao;
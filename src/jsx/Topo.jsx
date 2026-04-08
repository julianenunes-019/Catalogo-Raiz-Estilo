function Topo({ setPagina }) {
  return (
    <header className="topo">
      <h2>Raiz & Estilo</h2>

      <nav>
        <button onClick={() => setPagina("inicio")}>Início</button>
        <button onClick={() => setPagina("catalogo")}>Tranças & Preços</button>
        <button onClick={() => setPagina("promocoes")}>Promoções</button>
        <button onClick={() => setPagina("contato")}>Contato</button>
      </nav>
    </header>
  );
}

export default Topo;
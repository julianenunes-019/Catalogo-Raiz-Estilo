function CartaoContato(props) {
  return (
    <div className="cartaoContatos">

      <div className="contatoEsquerda">

        <p className="textoContato">
          Entre em contato para agendamentos, dúvidas ou mais informações sobre nossos serviços.
        </p>

      </div>

      <div className="contatoDireita">

        <p>
          📧 E-mail:{" "}
          <a 
            href={`https://mail.google.com/mail/?view=cm&to=${props.email}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {props.email}
          </a>
        </p>

        <p>
          📱 WhatsApp:{" "}
          <a 
            href={`https://wa.me/${props.telefone}?text=Olá, gostaria de mais informações!`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {props.telefone}
          </a>
        </p>

        <p>
          📍 Endereço:{" "}
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.endereco)}`} 
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.endereco}
          </a>
        </p>

      </div>

    </div>
  );
}

export default CartaoContato;
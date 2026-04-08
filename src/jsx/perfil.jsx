function Perfil(props) {
    return (
        <img
        src={props.foto}
        alt={props.nome || "Perfil"}
        className={props.className || "foto"}
        />
    );
}
export default Perfil;
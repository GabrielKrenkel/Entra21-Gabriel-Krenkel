import "./style.css"
export function PrimeiroComponente() {
    let emoji = ":D"
    return(
        <>
        <h2>Primeiro Componente</h2>
        <p className="emoji">{emoji}</p>
        </>
    );
}
export function ParouImpar(props) {
    return (
        <>
        {
            props.numero % 2 === 0 ? 
            <p>O numero {props.numero} é par</p> : 
            <p>o numero {props.numero} é impar</p>
        }
        </>
    );
}
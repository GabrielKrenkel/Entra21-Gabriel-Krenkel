import React from "react"

export class ComponentesControlados extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nome: "",
            email: "",
            CPF: "",
            sexo: ""
        }
    }

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state);
    }
    noSend(e){

        e.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    Nome: 
                    <input 
                        type="text"
                        name="nome" 
                        onChange={this.handleChange} 
                        value={this.state.nome}/>
                </label>
                <br/>
                <label>
                    E-mail: 
                    <input 
                        type="email" 
                        name="email"
                        onChange={this.handleChange} 
                        value={this.state.email}/>
                </label>
                <br/>
                <label>
                    CPF: 
                    <input 
                        type="text" 
                        name="CPF" 
                        onChange={this.handleChange} 
                        value={this.state.CPF}/>
                </label>
                <br/>
                <label>
                <input type="radio" name="sexo" value="Feminino" onClick={this.handleChange} /> Feminino
                </label>
                <br/>
                <label>
                <input type="radio" name="sexo" value="Masculino" onClick={this.handleChange} /> Masculino
                </label>
                <br/>
                <select name="cidade" onChange={this.handleChange}>
                    <option value="blumenau" >Bluemenau</option>
                    <option value="Timbó">Timbó</option>
                    <option value="Indaial">Indaial</option>
                </select>
                <br/>
                <button onClick={this.noSend}>Enviar</button>
            </form>
        )
    }
}
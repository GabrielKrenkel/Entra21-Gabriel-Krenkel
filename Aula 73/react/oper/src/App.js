import './App.css';
import { ListaAlunos } from './components/ListaAlunos';
import { ComProps } from './components/ComProps';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Familia } from './components/Familia';
import { MembroFamilia } from './components/MembroFamilia';
import { Card } from './components/Card';
import { ParouImpar } from './components/ParouImpar'
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ComponenteAleatorio';
import { ComponentesControlados } from "./components/ComponentesContolados";
import { Contador } from './components/Contador';




function App() {
    return (
        <div className="App">
            <h1>Olá Mundo!</h1>
            <div className="cards">
                <Card titulo="Primeiro componente" cor="#F24464">
                    <PrimeiroComponente />
                </Card>
                <Card titulo="Componente com props">
                    <ComProps mensagem="Estou sendo enviado pelas props" />
                    <ComProps mensagem="Outra mensagem..." />
                </Card>
                <Card titulo="Lista de alunos" cor="#424255">
                    <ListaAlunos />
                </Card>
                <Card titulo="Children" cor="#37A6A6">
                    <Familia sobrenome="da Silva">
                        <MembroFamilia nome="Ana" />
                        <MembroFamilia nome="Marcos" />
                        <MembroFamilia nome="José" />
                    </Familia>
                </Card>
                <Card titulo="Rendenização Condicional">
                    <ParouImpar numero={10}/>
                </Card>
                <Card titulo="Manipulando Eventos">
                    <ManipulandoEventos />
                </Card>

                <Card titulo="State">
                    <Relogio/>
                    <hr/>
                    <ValorAleatorio/>          
                </Card>
                <Card titulo="Componente Controlado">
                    <ComponentesControlados/>
                </Card>
                <Card titulo="Contador">
                    <Contador inicial={0}/>
                </Card>
            </div>
        </div>
    );
}



export default App;
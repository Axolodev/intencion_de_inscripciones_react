import React, {Component} from 'react';
import './App.css';

//import ListaSemestres from "./student/ListaSemestres";
import VistaDirector from "./director/VistaDirector";

// import ContainerStudent from "./student/ContainerStudent";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            semestres: [],
            materiasSeleccionadas: [],
        };
    }

    contadorUnidades() {
        return this.state.materiasSeleccionadas.reduce(function (acc, sem) {
            return acc + sem.unidades;
        }, 0);
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-xs-12">
                        <VistaDirector/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

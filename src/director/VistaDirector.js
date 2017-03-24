import React, {Component} from 'react';
import TablaMateriasContainer from "./TablaMateriasContainer"
import TablaDepartamentosContainer from "./TablaDepartamentosContainer"


class VistaDirector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indice_tabla_seleccionada: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({indice_tabla_seleccionada: parseInt(event.target.value)});
    }

    getTableToDraw() {
        const DEPARTAMENTOS = 1;
        if (this.state.indice_tabla_seleccionada === DEPARTAMENTOS) {
            return (
                <TablaDepartamentosContainer />
            );
        }

        // Vista default, por materias.
        return (
            <div className="">
                <TablaMateriasContainer />
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-2 col-xs-offset-10">
                    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Por materia</option>
                        <option value="1">Por departamento</option>
                    </select>
                </div>
                { this.getTableToDraw() }
            </div>
        );
    }
}

export default VistaDirector;

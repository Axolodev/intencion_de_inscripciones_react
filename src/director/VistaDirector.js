import React, {Component} from 'react';
import ContainerTablas from "./ContainerTablas";


class VistaDirector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indice_tabla_seleccionada: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({indice_tabla_seleccionada: event.target.value});
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-2 col-xs-offset-10">
                    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Por materia</option>
                        <option value="1">Por carrera</option>
                    </select>
                </div>

                {this.state.indice_tabla_seleccionada}
                <ContainerTablas
                    indice_tabla_seleccionada={() => this.state.indice_tabla_seleccionada}
                />
            </div>
        );
    }
}

export default VistaDirector;

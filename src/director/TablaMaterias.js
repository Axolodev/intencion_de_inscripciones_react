import React, {Component} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
// eslint-disable-next-line
import styles from "fixed-data-table/dist/fixed-data-table.min.css";


class TablaMaterias extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _data: props.data,
            filtered_data: props.data,
            width: props.width
        };

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.width !== this.state.width){
            this.setState({width:nextProps.width});
        }
    }

    onFilterChange(e) {
        if (e.target.value.length === 0) {
            this.setState({
                filtered_data: this.state._data
            });
            return;
        }

        let regex = new RegExp(".*" + e.target.value.toLowerCase() + ".*");

        this.setState({
            filtered_data: this.state._data.filter((value) => {
                return regex.test(value.nombre.toLowerCase());
            })
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onFilterChange}
                            placeholder="Filtrar por nombre de materia"
                        />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-xs-12">
                        <Table
                            rowsCount={this.state.filtered_data.length}
                            rowHeight={30}
                            headerHeight={50}
                            width={this.state.width}
                            height={this.state.filtered_data.length >= 15 ? 500 : this.state.filtered_data.length * 30 + 52}>
                            <Column
                                header={<Cell className="text-center">Clave de materia</Cell>}
                                cell={props => (
                                    <Cell {...props} className="text-center">
                                        {this.state.filtered_data[props.rowIndex].cveMateria}
                                    </Cell>
                                )}
                                width={this.state.width * .2}
                            />
                            <Column
                                header={<Cell>Nombre de materia</Cell>}
                                cell={props => (
                                    <Cell {...props}>
                                        {this.state.filtered_data[props.rowIndex].nombre}
                                    </Cell>
                                )}
                                width={this.state.width * .6}
                            />
                            <Column
                                header={<Cell className="text-center">Alumnos registrados</Cell>}
                                cell={props => (
                                    <Cell {...props} className="text-center">
                                        {this.state.filtered_data[props.rowIndex].alumnos_registrados}
                                    </Cell>
                                )}
                                width={this.state.width * .2}
                            />
                        </Table>
                    </div>
                </div>
            </div>
        )
    };
}


export default TablaMaterias;

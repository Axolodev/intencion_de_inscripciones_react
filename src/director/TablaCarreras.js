import React, {Component} from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import styles from "fixed-data-table/dist/fixed-data-table.min.css";

class TablaCarreras extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _data: props.data,
            filtered_data: props.data,
            width: props.width
        };
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(e) {
        console.log(e.target.value);
        if (e.target.value.length === 0) {
            this.setState({
                filtered_data: this.state._data
            });
            return;
        }

        let regex = new RegExp(".*" + e.target.value.toLowerCase() + ".*");

        this.setState({
            filtered_data: this.state._data.filter((value) => {
                return regex.test(value.siglas.toLowerCase());
            })
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-2">
                    <input
                        type="text"
                        className="form-control"
                        onChange={this.onFilterChange}
                        placeholder="Filtrar por carrera"
                    />
                </div>
                <br/>
                <br/>
                <div className="col-xs-12">
                    <Table
                        rowsCount={this.state.filtered_data.length}
                        rowHeight={30}
                        headerHeight={50}
                        width={this.state.width}
                        height={this.state.filtered_data.length >= 15 ? 500 : this.state.filtered_data.length * 30 + 52}>
                        <Column
                            header={<Cell className="text-center">Siglas</Cell>}
                            cell={props => (
                                <Cell {...props} className="text-center">
                                    {this.state.filtered_data[props.rowIndex].siglas}
                                </Cell>
                            )}
                            width={this.state.width * .2}
                        />
                        <Column
                            header={<Cell className="text-center">Alumnos Registrados</Cell>}
                            cell={props => (
                                <Cell {...props} className="text-center">
                                    {this.state.filtered_data[props.rowIndex].alumnos_registrados}
                                </Cell>
                            )}
                            width={this.state.width * .3}
                        />
                        <Column
                            header={<Cell className="text-center">Alumnos Inscritos</Cell>}
                            cell={props => (
                                <Cell {...props} className="text-center">
                                    {this.state.filtered_data[props.rowIndex].inscritos}
                                </Cell>
                            )}
                            width={this.state.width * .3}
                        />
                        <Column
                            header={<Cell className="text-center">Porcentaje</Cell>}
                            cell={props => (
                                <Cell {...props} className="text-center">
                                    {(this.state.filtered_data[props.rowIndex].alumnos_registrados / this.state.filtered_data[props.rowIndex].inscritos)
                                        .toLocaleString('en-US', {
                                            maximumFractionDigits: 2,
                                            minimumFractionDigits: 1
                                        })}
                                </Cell>
                            )}
                            width={this.state.width * .2}
                        />
                    </Table>
                </div>
                <br/>
            </div>
        )
    };
}

export default TablaCarreras;


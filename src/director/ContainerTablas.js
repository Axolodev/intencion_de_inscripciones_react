import React, {Component} from 'react';
import TablaMaterias from './TablaMaterias';
import TablaCarreras from './TablaCarreras';

class ContainerTablas extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            receivedData: false,
            getIndiceTablaSeleccionada: props.indice_tabla_seleccionada,
            data: [],
            tableWidth: 0,
            tableHeight: 0
        };

        this.updateTableDimensions = this.updateTableDimensions.bind(this);
    }

    updateTableDimensions() {
        console.log(window.innerWidth * .85);
        this.setState({tableWidth: parseInt(window.innerWidth * .85)});
    }

    componentDidMount() {
        let server = "http://localhost";
        let port = "8000";
        let RESTfulLink = "/reports/all/L00250399";
        let self = this;
        fetch(server + ":" + port + RESTfulLink, {
            method: "GET",
        })
            .then((resp) => {
                return resp.json();
            })
            .then(function (data) {
                self.setState({receivedData: true});
                self.setState({data});
                console.log(data);
            });
        this.updateTableDimensions();
        window.addEventListener("resize", this.updateTableDimensions);
    }

    render() {
        let tableToRender = (
            <TablaMaterias
                data={this.state.data.infoMaterias}
                width={this.state.tableWidth}
            />
        );

        if (this.state.getIndiceTablaSeleccionada() == 1) {
            tableToRender = (
                <TablaCarreras
                    data={this.state.data.infoCarreras}
                    width={this.state.tableWidth}
                />
            );
        }

        return (
            <div className="container">{ tableToRender }</div>
        );
    }
}

export default ContainerTablas;

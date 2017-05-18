import React, {Component} from 'react';
import TablaMaterias from './TablaMaterias';
import TablaCarreras from './TablaCarreras';

class ContainerTablas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receivedData: false,
            getSelectedTableIndex: props.indice_tabla_seleccionada,
            data: [],
            tableWidth: 0,
            tableHeight: 0
        };

        this.updateTableDimensions = this.updateTableDimensions.bind(this);
    }

    updateTableDimensions() {
        this.setState({tableWidth: document.getElementById("sizer").offsetWidth});
    }

    componentDidMount() {
        let RESTfulLink = "/reports/all/L00250399";
        let self = this;
        fetch(RESTfulLink, {
            method: "GET",
        })
            .then((resp) => {
                return resp.json();
            })
            .then(function (data) {
                self.setState({data, receivedData: true});
            });

        this.updateTableDimensions();
        window.addEventListener("resize", this.updateTableDimensions);
    }

    render() {

        let tableToRender = <div className="jumbotron text-center"><h2>Loading...</h2></div>;

        if(this.state.receivedData) {
            let selectedTableIndex = parseInt(this.state.getSelectedTableIndex());
            tableToRender = (
                <TablaMaterias
                    data={this.state.data.infoMaterias}
                    width={this.state.tableWidth}
                />
            );
            if (selectedTableIndex === 1) {
                tableToRender = (
                    <TablaCarreras
                        data={this.state.data.infoCarreras}
                        width={this.state.tableWidth}
                    />
                );
            }
        }

        return (
            <div id="sizer">
                { tableToRender }
                <br/>
            </div>
        );
    }
}

export default ContainerTablas;

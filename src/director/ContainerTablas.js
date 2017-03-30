import React, {Component} from 'react';

class ContainerTablas extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            indice_tabla_seleccionada:props.indice_tabla_seleccionada
        }
    }

    handleChange(event){
        console.log(event);
        this.setState({});
    }

    componentDidMount() {
        let server = "http://localhost";
        let port = "8000";
        let RESTfulLink = "/reports/subjects";
        fetch(server + ":" + port + RESTfulLink, {
            method: "GET",
        })
            .then((resp) => {
                console.log(resp);
                return resp.json();
            })
            .then(function (data) {
                console.log(data);
            });
    }

    render() {
        return (
            <div className="container"><p>idsafhdosi</p>{ this.state.indice_tabla_seleccionada }</div>
        );
    }
}

export default ContainerTablas;

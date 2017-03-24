import React, {Component} from 'react';

import TablaMateriasPresentation from './TablaMateriasPresentation';

class TablaMateriasContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materias: []
        };
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
            <div className="">fsdfdsa</div>
        );
    }
}

export default TablaMateriasContainer;

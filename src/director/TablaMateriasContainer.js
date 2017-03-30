import React, {Component} from 'react';

import TablaMaterias from './TablaMaterias';

class TablaMateriasContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materias: []
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <TablaMaterias />
        );
    }
}

export default TablaMateriasContainer;

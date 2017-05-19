import React, {Component} from 'react';

class Materia extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <div className="react-materia">
                <div className="row">
                    <div className="col-xs-1">
                        <div className="text-center" style={{verticalAlign:"center"}}>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="col-xs-10" style={{verticalAlign:"center"}}>
                        {this.state.data.nombre}
                    </div>
                </div>
            </div>
        );
    }
}

export default Materia;

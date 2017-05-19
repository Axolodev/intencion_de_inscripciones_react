import React, {Component} from 'react';
import Materia from "./Materia";
// eslint-disable-next-line
import styles from "./semestre.css"

class Semestre extends Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            name: props.name,
            has_classes : props.data.length > 0 || !Array.isArray(props.data),
            data: props.data,
            index: props.index
        }
    }

    render(){
        let name = (
            <div>
                <i className="semIcon glyphicon glyphicon-ok pull-right" />
                <div className="semName">{this.state.name}</div>
            </div>
        );

        let panel_heading_content = null;
        if(this.state.has_classes) {
            panel_heading_content = (
                <a data-toggle="collapse" href={"#semestre-panel-" + this.state.index}>
                    {name}
                </a>
            )
        } else {
            panel_heading_content = name
        }

        let panel_content = null;

        if(this.state.has_classes){
            if(Array.isArray(this.state.data)){
                panel_content = this.state.data.map((object, index) => {
                    return <Materia
                        key={index}
                        data={object}
                    />
                });
            } else {
                panel_content = Object.keys(this.state.data).map(key => {
                    return <Materia
                        key={key}
                        data={this.state.data[key]}
                    />
                });
            }
        }

        return (
            <div className="col-xs-12 col-md-6">
                <div className={"panel " + (this.state.has_classes ? "panel-success":"panel-info")}>
                    <div className="panel-heading">
                        {panel_heading_content}
                    </div>
                    <div className="panel-collapse collapse" id={"semestre-panel-" + this.state.index}>
                        <div className="panel-body">
                            {panel_content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Semestre;

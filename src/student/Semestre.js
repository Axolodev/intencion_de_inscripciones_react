import React, {Component} from 'react';

const Semestre = (props) => {


    return (
        <div className="col-xs-12 col-md-6">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <i className="semIcon glyphicon glyphicon-ok pull-right" />
                    <div className="semName">{props.name}</div>
                </div>
            </div>
        </div>
    );
};

export default Semestre;

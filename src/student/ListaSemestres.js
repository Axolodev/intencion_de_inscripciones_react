import React from 'react';

import Semestre from "./Semestre";

const ListaSemestres = (props) => {
    const semestres = props.semestres.map((semestre) => {
        return (
            <Semestre
                onMateriaSelect={props.onMateriaSelect}
                key={semestre.id}
                semestre={semestre}
            />
        );
    });

    return (
        <div className="row">
            {semestres}
        </div>
    )
};

export default ListaSemestres;
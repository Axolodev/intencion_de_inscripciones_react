import React, {Component} from 'react';
import Semestre from "./Semestre";

class ContainerStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receivedData: false,
            data: [],
        }
    }

    componentDidMount() {
        let RESTfulLink = "/student/materias";
        let self = this;
        /*
         fetch(RESTfulLink, {
         method: "GET",
         })
         .then((resp) => {
         return resp.json();
         })
         .then(function (data) {
         self.setState({data, receivedData: true});
         });
         */
        let jsonTestData = {
            "materias": {
                "Remediales": [],
                "Primer Semestre": [],
                "Segundo Semestre": [],
                "Tercer Semestre": [],
                "Cuarto Semestre": [],
                "Quinto Semestre": [],
                "Sexto Semestre": [],
                "S\u00e9ptimo Semestre": {
                    "4": {
                        "nombre": "Administraci\u00f3n de proyectos de ingenier\u00eda de software",
                        "clave": "TC3002",
                        "claveMateria": "TC",
                        "claveMateriaCurso": "3002",
                        "unidades": "8",
                        "calificacion": null,
                        "requisitos": " TI2003+ TC2004\/ SI00875\/ TI2011+ TC2004@",
                        "numMateria": "5",
                        "atributo": null,
                        "claveArea": "ITC11 P07",
                        "esPuente": 0
                    }
                },
                "Octavo Semestre": {
                    "2": {
                        "nombre": "Dise\u00f1o de compiladores",
                        "clave": "TC3048",
                        "claveMateria": "TC",
                        "claveMateriaCurso": "3048",
                        "unidades": "8",
                        "calificacion": null,
                        "requisitos": "TC2006&",
                        "numMateria": "3",
                        "atributo": null,
                        "claveArea": "ITC11 P08",
                        "esPuente": 0
                    },
                    "4": {
                        "nombre": "Laboratorio de desarrollo de aplicaciones Web",
                        "clave": "TC3052",
                        "claveMateria": "TC",
                        "claveMateriaCurso": "3052",
                        "unidades": "4",
                        "calificacion": null,
                        "requisitos": "TC2026&",
                        "numMateria": "5",
                        "atributo": null,
                        "claveArea": "ITC11 P08",
                        "esPuente": 0
                    }
                },
                "Noveno Semestre": [{
                    "nombre": "\u00c9tica aplicada",
                    "clave": "HS2006",
                    "claveMateria": "HS",
                    "claveMateriaCurso": "2006",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "NT",
                    "numMateria": "1",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 1
                }, {
                    "nombre": "Sistemas inteligentes",
                    "clave": "TC2011",
                    "claveMateria": "TC",
                    "claveMateriaCurso": "2011",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "TC2006 ",
                    "numMateria": "2",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 0
                }, {
                    "nombre": "Proyecto integrador para el desarrollo de soluciones empresariales",
                    "clave": "TC3054",
                    "claveMateria": "TC",
                    "claveMateriaCurso": "3054",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "SEM09\/ TC2024 ",
                    "numMateria": "3",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 0
                }, {
                    "nombre": "Introducci\u00f3n a la vida profesional",
                    "clave": "TI3035",
                    "claveMateria": "TI",
                    "claveMateriaCurso": "3035",
                    "unidades": "2",
                    "calificacion": null,
                    "requisitos": "NT",
                    "numMateria": "4",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 0
                }, {
                    "nombre": "T\u00f3picos IV",
                    "clave": "VA2013",
                    "claveMateria": "VA",
                    "claveMateriaCurso": "2013",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "NT",
                    "numMateria": "5",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 1
                }, {
                    "nombre": "T\u00f3picos V",
                    "clave": "VA2014",
                    "claveMateria": "VA",
                    "claveMateriaCurso": "2014",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "NT",
                    "numMateria": "6",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 1
                }, {
                    "nombre": "T\u00f3picos VI",
                    "clave": "VA2015",
                    "claveMateria": "VA",
                    "claveMateriaCurso": "2015",
                    "unidades": "8",
                    "calificacion": null,
                    "requisitos": "NT",
                    "numMateria": "7",
                    "atributo": null,
                    "claveArea": "ITC11 P09",
                    "esPuente": 1
                }]
            }, "seleccionMat": ["TC3002", "TC3048", "TC3052", "CF3005", "TI3035"]
        };
        this.setState({data: jsonTestData, receivedData: true});
    }

    render() {
        let _rendered = "";
        if (this.state.receivedData) {
            console.log(this.state);

            _rendered = Object.keys(this.state.data.materias).map((key, index) => {
                return (<Semestre
                    key={key}
                    data={this.state.data.materias[key]}
                    name={key}
                />);
            });
        }
        return (
            <div className="">
                {_rendered}


            </div>
        );
    }
}

export default ContainerStudent;

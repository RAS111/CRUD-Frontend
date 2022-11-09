import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function GetPerson() {
    const [person, setPerson] = useState({
        name: "",
        surname: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadPerson();
    }, []);

    const loadPerson = async () => {
        const result = await axios.get(`http://localhost:8080/person/${id}`);
        setPerson(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Detalle de Persona</h2>
                    <div className="card">
                        <div className="card-header">
                            Detalle de persona con id : {person.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {person.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Apellido: </b>
                                    {person.surname}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Volver Atras
                    </Link>
                </div>
            </div>
        </div>
    );
}

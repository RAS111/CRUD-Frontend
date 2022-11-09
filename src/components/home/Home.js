import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        loadPerson();
    }, []);

    const loadPerson = async () => {
        const result = await axios.get("http://localhost:8080/person/");
        setPerson(result.data);
    };

    const deletePerson = async (id) => {
        await axios.delete(`http://localhost:8080/person/${id}`);
        loadPerson();
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="py-4 w-60 ">
                <table className="table border shadow ">
                    <thead>
                        <tr>
                            <th scope="col">Nro</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {person.map((person, index) => (
                            <tr>
                                <th scope="row" key={index}>
                                    {index + 1}
                                </th>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>
                                    <Link
                                        className="btn btn-info mx-3"
                                        to={`/getperson/${person.id}`}
                                    >
                                        Ver
                                    </Link>
                                    <Link
                                        className="btn btn-outline-info mx-3"
                                        to={`/updateperson/${person.id}`}
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-3"
                                        onClick={() => deletePerson(person.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

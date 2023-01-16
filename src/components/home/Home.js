import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

export default function Home() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [client, setClient] = useState([]);

    useEffect(() => {
        loadClient();
    }, []);

    const loadClient = async () => {
        const result = await axios.get("http://localhost:8080/client/", {
            headers: { 
                "Authorization": "Bearer " + user.token
            }
        });
        setClient(result.data);
    };

    const deleteClient = async (id) => {
        await axios.delete(`http://localhost:8080/client/${id}`,{
            headers: { 
                "Authorization": "Bearer " + user.token
            }
        });
        loadClient();
    };

    return (
        <>
            <Navbar />
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
                            {client.map((client, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td>{client.name}</td>
                                    <td>{client.surname}</td>
                                    <td>
                                        <Link
                                            className="btn btn-info mx-3"
                                            to={`/get-client/${client.id}`}
                                        >
                                            Ver
                                        </Link>
                                        <Link
                                            className="btn btn-outline-info mx-3"
                                            to={`/update-client/${client.id}`}
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            className="btn btn-danger mx-3"
                                            onClick={() =>
                                                deleteClient(client.id)
                                            }
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
        </>
    );
}

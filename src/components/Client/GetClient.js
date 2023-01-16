import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Error404 from "../ErrorPage/Error404";

export default function GetClient() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [client, setClient] = useState({
        name: "",
        surname: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadClient();
    }, []);

    const loadClient = async () => {
        const result = await axios.get(`http://localhost:8080/client/${id}`, {
            headers: { 
                "Authorization": "Bearer " + user.token
            }
        });
        setClient(result.data);
    };

    return (
        <div>
            {client.id != id ? (
                <Error404 />
            ) : (
                <div>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                                <h2 className="text-center m-4">
                                    Detalle del Cliente
                                </h2>
                                <div className="card">
                                    <div className="card-header">
                                        Detalle del cliente con id : {client.id}
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <b>Nombre: </b>
                                                {client.name}
                                            </li>
                                            <li className="list-group-item">
                                                <b>Apellido: </b>
                                                {client.surname}
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
                </div>
            )}
        </div>
    );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Error404 from "../ErrorPage/Error404";

export default function UpdateClient() {
    const user = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const { id } = useParams();

    const [client, setClient] = useState({
        name: "",
        surname: "",
    });

    const { name, surname } = client;

    const onInputChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadClient();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/client/${id}`, client, {
            headers: { 
                "Authorization": "Bearer " + user.token
            }
        });
        navigate("/");
    };

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
                                    Editar Cliente
                                </h2>

                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="Name"
                                            className="form-label"
                                        >
                                            Nombre
                                        </label>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Ingresa tu nombre"
                                            name="name"
                                            value={name}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="Surname"
                                            className="form-label"
                                        >
                                            Apellido
                                        </label>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            placeholder="Ingresa tu apellido"
                                            name="surname"
                                            value={surname}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-outline-primary"
                                    >
                                        Guardar
                                    </button>
                                    <Link
                                        className="btn btn-outline-danger mx-2"
                                        to="/"
                                    >
                                        Cancelar
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPerson() {
    let navigate = useNavigate();

    const [person, setPerson] = useState({
        name: "",
        surname: "",
    });

    const { name, surname } = person;

    const onInputChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/person/", person);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Registrar Persona</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
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
                            <label htmlFor="Surname" className="form-label">
                                Apellido
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Ingresa tu nombre"
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
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

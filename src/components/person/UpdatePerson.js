import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdatePerson() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [person, setPerson] = useState({
        name: "",
        surname: "",
    });

    const { name, surname } = person;

    const onInputChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadPerson();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/person/${id}`, person);
        navigate("/");
    };

    const loadPerson = async () => {
        const result = await axios.get(`http://localhost:8080/person/${id}`);
        setPerson(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Persona</h2>

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
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

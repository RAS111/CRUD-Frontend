import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Register() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/auth/", user);
            navigate("/login");
        } catch (err) {
            alert("el usuario ya existe");
        }
        
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-4 mt-md-4 pb-3">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        Crear una Cuenta
                                    </h2>
                                    <p className="text-white-50 mb-5">
                                        Por favor ingresa tus datos para
                                        crear una cuenta!
                                    </p>
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type={"text"}
                                                className="form-control form-control-lg"
                                                placeholder="Ingresa tu Nombre de Usuario"
                                                name="username"
                                                value={username}
                                                onChange={(e) =>
                                                    onInputChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="form-white mb-4">
                                            <input
                                                type={"email"}
                                                className="form-control form-control-lg"
                                                placeholder="Ingresa tu Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) =>
                                                    onInputChange(e)
                                                }
                                            />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type={"password"}
                                                className="form-control form-control-lg"
                                                placeholder="Ingresa tu Contraseña"
                                                name="password"
                                                value={password}
                                                onChange={(e) =>
                                                    onInputChange(e)
                                                }
                                            />
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                        >
                                            Crear Cuenta
                                        </button>
                                    </form>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        ¿Ya tienes una cuenta?
                                        <Link
                                            className="text-white-50 fw-bold"
                                            to="/login"
                                        >
                                            Logueate
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

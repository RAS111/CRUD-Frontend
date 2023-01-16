import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = (username, password) => {
        return axios
            .post("http://localhost:8080/generate-token", {
                username,
                password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("user",JSON.stringify(response.data));
                }
                return response.data;
            });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(username, password).then(
                () => {
                    navigate("/");
                },
                () => {
                    alert("usuario o contraseña incorrectos");
                }
            );
        } catch (err) {
            console.log(err);
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
                                <div className="mb-md-5 mt-md-4 pb-3">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        Iniciar Sesion
                                    </h2>
                                    <p className="text-white-50 mb-5">
                                        Por favor ingresa tu usuario y
                                        contraseña!
                                    </p>
                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Usuario"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                placeholder="Contraseña"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                        >
                                            Iniciar Sesion
                                        </button>
                                    </form>
                                </div>

                                <div>
                                    <p className="mb-0">
                                        ¿No tienes una cuenta?
                                        <Link
                                            className="text-white-50 fw-bold"
                                            to="/register"
                                        >
                                            Registrate
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

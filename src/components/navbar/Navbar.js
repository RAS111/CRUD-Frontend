import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info bg-gradient">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        CRUD
                    </Link>
                    <Link className="btn btn-outline-light" to="/add-client">
                        Añadir Cliente
                    </Link>
                </div>
            </nav>
        </div>
    );
}

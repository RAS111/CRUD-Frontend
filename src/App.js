import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddClient from "./components/Client/AddClient";
import UpdateClient from "./components/Client/UpdateClient";
import GetClient from "./components/Client/GetClient";
import Error404 from "./components/ErrorPage/Error404"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/add-client" element={<AddClient />} />
                    <Route exact path="/update-client/:id" element={<UpdateClient />} />
                    <Route exact path="/get-client/:id" element={<GetClient />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

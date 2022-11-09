import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AddPerson from "./components/person/AddPerson";
import UpdatePerson from "./components/person/UpdatePerson";
import GetPerson from "./components/person/GetPerson";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/addperson" element={<AddPerson />} />
                    <Route exact path="/updateperson/:id" element={<UpdatePerson />} />
                    <Route exact path="/getperson/:id" element={<GetPerson />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

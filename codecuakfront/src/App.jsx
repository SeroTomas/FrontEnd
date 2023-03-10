import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hiring from "./components/Hiring/Hiring";
import Landing from "./components/Landing/Landing";
import QandA from "./components/QandA/QandA";
import Social from "./components/Social/Social";
import Work from "./components/Work/Work";
import User from "./components/User/User";
import About from "./components/About/About";
import Terminos from "./components/Terminos/Terminos";
import Contacto from "./components/Contacto/Contacto";
import UsersAll from "./components/UsersAll/UsersAll";
import UserDetail from "./components/UserDetail/UserDetail";
import Donaciones from "./components/blueprints/Donaciones/Donaciones";
import Gracias from "./components/blueprints/Donaciones/Gracias";
import LogIn from "./Auth/LogIn";
import Register from "./Auth/Register";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import NotAdmin from "./components/NotAdmin/NotAdmin";
import { useSelector } from "react-redux";
function App() {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/hiring" element={<Hiring />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/qanda" element={<QandA />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/terminos" element={<Terminos />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/users" element={<UsersAll />} />
        <Route exact path="/users/:id" element={<UserDetail />} />
        <Route exact path="/donaciones" element={<Donaciones />} />
        <Route exact path="/gracias" element={<Gracias />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin/" element={<AdminDashboard user={userData} />} />
        <Route exact path="/notadmin" element={<NotAdmin />} />
      </Routes>
    </div>
  );
}

export default App;

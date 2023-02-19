import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Media/logo-03.png";
import {getUsersName } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const [notiExpanded, setNotiExpanded] = useState(false);
  const usersName = useSelector((state)=> state.users)
  const dispatch = useDispatch()
  const submitHandler = (event) =>{
    event.preventDefault();
    dispatch(getUsersName(search))
    setSearch("")
    const filtered = usersName.filter((ele)=>ele.name.toLowerCase() == search.toLowerCase())
    if(filtered.length > 0){
        return filtered
    }
    else{
        alert("nada por aqui")
    }
  }
  const handlerChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handlerNotifications = () => {
    setNotiExpanded(!notiExpanded);
  };

  return (
    <div className={style.container}>
      <nav className={style.navContainer}>
        <div className={style.logoContainer}>
          <Link to={"/"}>
            <img src={logo} alt="loguito" />
          </Link>
        </div>
        <div className={style.searchContainer}>
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lm" />
          <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={handlerChange}
            placeholder="Buscar en codeCuak"
          />
          </form>
        </div>
        <div className={style.ulContainer}>
          <ul>
            <li>
              <Link to={"/social"}>SocialCuak</Link>
            </li>
            <li>
              <Link to={"/work"}>WorkCuak</Link>
            </li>
            <li>
              <Link to={"/qanda"}>Q&A-Cuak</Link>
            </li>
            <li>
              <Link to={"/hiring"}>HiringCuak</Link>
            </li>
          </ul>
        </div>
        <div className={style.iconsContainer}>
          <button onClick={handlerNotifications}>
            <i className="fa-sharp fa-solid fa-layer-group fa-xl" />
          </button>
          <Link to={"/user"}>
            <i className="fa-sharp fa-solid fa-circle-user fa-xl" />
          </Link>
        </div>
        <div
          className={notiExpanded ? style.notiExpanded : style.notiNotExpanded}
        >
          <div className={style.notiContainer}>
            <div className={style.notiHeader}>
              <h2>Notificaciones</h2>
            </div>
            <div className={style.notifications}>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

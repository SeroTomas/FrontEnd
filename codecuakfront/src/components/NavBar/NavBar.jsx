import { useState } from "react"
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Media/logo-03.png"

const NavBar = () => {

    const [search, setSearch] = useState("")

    const [notiExpanded, setNotiExpanded] = useState(false)

    const handlerChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    const handlerNotifications = () => {
        setNotiExpanded(!notiExpanded)
    }

    return (
        <div className={style.container}>
            <nav className={style.navContainer}>
                <div className={style.logoContainer}>
                    <img src={logo} alt="loguito" />
                </div>
                <div className={style.searchContainer}>
                    <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg" />
                    <input type="text" value={search} onChange={handlerChange} placeholder="Buscar en codeCuak" />
                </div>
                <div className={style.ulContainer}>
                    <ul>
                        <li><Link to={"/social"}>SocialCuak</Link></li>
                        <li><Link to={"/work"}>WorkCuak</Link></li>
                        <li><Link to={"/qanda"}>Q&A-Cuak</Link></li>
                        <li><Link to={"/hiring"}>HiringCuak</Link></li>
                    </ul>
                </div>
                <div className={style.iconsContainer}>
                    <button onClick={handlerNotifications}><i className="fa-sharp fa-solid fa-layer-group fa-xl" /></button>
                    <Link to={"/user"}><i className="fa-sharp fa-solid fa-circle-user fa-xl" /></Link>
                </div>
                <div className={
                    notiExpanded ? style.notiExpanded : style.notiNotExpanded
                }>
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
    )
}

export default NavBar
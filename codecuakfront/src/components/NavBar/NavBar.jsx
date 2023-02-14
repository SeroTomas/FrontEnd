import { useState } from "react"
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

    const [search, setSearch] = useState("")

    const handlerChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    return (
        <nav className={style.navContainer}>
            <div className={style.logoContainer}>
                <img src="../../Media/pngwing.com.png" alt="loguito" />
            </div>
            <div className={style.searchContainer}>
                <i class="fa-sharp fa-solid fa-magnifying-glass fa-lg" />
                <input type="text" value={search} onChange={handlerChange}/>
            </div>
            <div className={style.ulContainer}>
                <ul>
                    <li><Link to={"/social"}>SocialCuak</Link></li>
                    <li><Link to={"/work"}>WorkCuak</Link></li>
                    <li><Link to={"qanda"}>Q&A-Cuak</Link></li>
                    <li><Link to={"/hiring"}>HiringCuak</Link></li>
                </ul>
            </div>
            <div className={style.iconsContainer}>
                <i class="fa-sharp fa-solid fa-layer-group fa-xl"></i>
                <i class="fa-sharp fa-solid fa-circle-user fa-xl"></i>
            </div>
        </nav>
    )
}

export default NavBar
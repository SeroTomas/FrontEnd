import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={style.navContainer}>
            <div className={style.logoContainer}>
                <img src="../../Media/pngwing.com.png" alt="loguito" />
            </div>
            <div className={style.searchContainer}>
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" />
                <input type="text" value={}/>
            </div>
            <div className={style.ulContainer}>

            </div>
            <div className={style.iconsContainer}>

            </div>
        </nav>
    )
}

export default NavBar
import style from "./searchExpandedUser.module.css";
import logo from "../../../Media/LOGO_SIN_FONDO.png";
import { Link } from "react-router-dom";

const SearchExpandedUser = ({ image, name, id, onClick }) => {
  console.log(image);
  return (
    <Link to={`/users/${id}`} onClick={onClick} className={style.link}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          {image == null ? (
            <img src={logo} alt={`Imagen de usuario ${name}`} />
          ) : (
            <img src={image} alt={`Imagen de usuario ${name}`} />
          )}
        </div>
        <div className={style.nameContainer}>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchExpandedUser;

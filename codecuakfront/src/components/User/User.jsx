//importo Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanPost, getUserById } from "../../redux/action";

//Importo componentes react
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

//MUI
import { Box } from "@mui/system";

const User = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  useEffect(() => {
    
    dispatch(cleanPost())

    if (token) {
      dispatch(getUserById(token, id));
      window.scrollTo(0,0)
    } else {
      navigate("/social");
      alert("¡Por favor inicie sesión para ver el perfil!");
    }
  }, [dispatch, token]);

  return (
    <>
      {token ? (
        <Box>
          <NavBar />
          {/* userProfile renderiza los datos de un usuario especifico, en este caso el que inicio sesion. */}
          <UserProfile user={userData} />
        </Box>
      ) : null}

    </>
  );
};

export default User;

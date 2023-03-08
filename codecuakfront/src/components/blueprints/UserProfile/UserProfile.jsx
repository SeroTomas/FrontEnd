//estilos css
import styles from "./userProfile.module.css";
// dependencias MUI
import { Box, Typography, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
// componentes
import FormEditUser from "./FormEditUser";
import CardUser from "../../AuxComponents/CardUser/CardUser";
import PostUserContainer from "../../AuxComponents/PostUserContainer/PostUserContainer";
const UserProfile = ({ user }) => {
  // imagenes portada y perfil por default
  const portadaDefault =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZZeLZAzPyAtBhCUl384gDJYN3ROMfPXtPDUlu3QAX9gyEEX6";
  const imageDefault =
    "https://st2.depositphotos.com/19428878/44645/v/600/depositphotos_446453832-stock-illustration-default-avatar-profile-icon-social.jpg";

  // Creo un objeto con los datos necesarios en cardUser, para pasarlos por props
  const cardUserData = {
    name: user.name,
    nickName: user.nickName,
    image: user.image ? user.image : imageDefault,
    email: user.email,
    gitHub: user.github,
    description: user.description,
  };

  return (
    <Box bgcolor="#D5DBDB" className={styles.container} marginTop="70px">
      <Box className={styles.subContainer1}>
        <Box
          className={styles.subContainerUser}
          sx={{ boxShadow: "0px 4px 6px rgba(1, 1, 1, 0.20)" }}
          maxWidth="70%"
        >
          <Box className={styles.portada}>
            <img src={user.portada || portadaDefault} alt="Imagen de portada" />
            <FormEditUser />
          </Box>

          <Box className={styles.subContainerData}>
            <CardUser user={cardUserData} />
          </Box>
              <Divider variant="middle" sx={{ borderBottomWidth: 2 }} />
          <Box className={styles.subContainer2}>
              
            {user.skills ? (
                <>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="start"
                  flexDirection="column"
                >
                  <Box display="flex" margin="1rem">
                    <Typography variant="h7" fontFamily={"Sen"}>
                      Mis habilidades:
                    </Typography>
                  </Box>
                  <Box>
                    <Box display="flex" flexDirection="row">
                      <ul style={{ listStyle: "none" }}>
                        {user.skills?.map((skill) => {
                          return (
                            <Typography
                              variant="h7"
                              fontFamily={"Sen"}
                              textTransform="uppercase"
                              margin="10px"
                            >
                              <CircleIcon
                                sx={{ fontSize: 12 }}
                                color="success"
                              />
                              {skill}
                            </Typography>
                          );
                        })}
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : null}
          </Box>
          {user.about ? (
            <>
              <Divider variant="middle" sx={{ borderBottomWidth: 2 }} />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="start"
                maxWidth="100%"
                height="10rem"
              >
                <Typography
                  variant="h7"
                  fontFamily={"Sen"}
                  fontSize="18px"
                  marginTop="10px"
                >
                  {user.about}
                </Typography>
              </Box>
            </>
          ) : null}

          <Divider variant="middle" sx={{ borderBottomWidth: 2 }} />
          <PostUserContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;

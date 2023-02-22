import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
const ButtonsDonaciones = ({ donacion }) => {
  console.log({ donacion });
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="outlined"
        color="success"
        style={{ width: 150, height: 60, fontSize: 20, margin: 10 }}
      >
        ${donacion.price}
      </Button>
    </Box>
  );
};

export default ButtonsDonaciones;

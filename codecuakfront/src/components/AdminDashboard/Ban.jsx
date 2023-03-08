import React from "react";
import { useState,useEffect } from "react";
import { Box,Fab,CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";
import { deleteUser } from "../../redux/action";
import DeleteIcon from "@mui/icons-material/Delete";
import { Check } from "@mui/icons-material";
import {allUserAdmin} from "../../redux/action"
import { useDispatch } from "react-redux";
const Ban = ({ params, rowId, setRowId }) => {
  let { status} = params.row
  const dispatch= useDispatch()
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const token  = localStorage.getItem("token")
  const handleSubmit = async () => {
    setLoading(true);
    const {id} = params.row;
    const result = await deleteUser(id,token);
    if (result) {
      setSuccess(true);
      setRowId(null);
    }
    setLoading(false);
    
    dispatch(allUserAdmin())
    window.location.reload()
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: blue,
            "&:hover": { bgcolor: blue },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={status=="superadmin"?true:loading}
          onClick={handleSubmit}
        >
          <DeleteIcon />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: "#ffff",
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default Ban;

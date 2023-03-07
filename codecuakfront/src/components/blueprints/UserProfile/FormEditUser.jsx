import { useState } from "react";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { editUser } from "../../../axiosFunctions";
import { useParams } from "react-router-dom";

export default function FormEditUser() {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    skills: [],
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "skills") {
      setEdit({
        ...edit,
        [property]: value.split(","),
      });
    } else {
      setEdit({
        ...edit,
        [property]: value,
      });
    }
  };

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(edit);
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(id, edit.name, edit.description, edit.skills, token);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} zIndex="10000">
        Open form dialog
      </Button>
      <FormControl onSubmit={handleSubmit}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent sx={{ width: "30rem", height: "50rem" }}>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              size="small"
              required
              sx={{ color: "black" }}
              label="Nombre y Apellido"
              value={edit.name}
              name="name"
              placeholder="Nombre y Apellido"
              onChange={handleChange}
            />
            <TextField
              size="small"
              required
              sx={{ color: "black" }}
              label="description"
              value={edit.description}
              name="description"
              placeholder="description"
              onChange={handleChange}
            />
            <TextField
              size="small"
              required
              sx={{ color: "black" }}
              label="skills"
              value={edit.skills}
              name="skills"
              placeholder="skills"
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>editame esssta</Button>
          </DialogActions>
        </Dialog>
      </FormControl>
    </div>
  );
}

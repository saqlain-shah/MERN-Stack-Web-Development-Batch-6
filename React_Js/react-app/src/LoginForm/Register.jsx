import { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export const RegisterPage = () => {
  // create a state variable for the form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  // handle the input change events
  const handleChange = (e) => {
    const { name, value } = e.target;
    // update the form data state with the new value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // create a state variable for the modal open
  const [open, setOpen] = useState(false);

  // handle the modal open event
  const handleOpen = () => {
    setOpen(true);
  };

  // handle the modal close event
  const handleClose = () => {
    setOpen(false);
  };

  // handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission (registration)
    // open the modal after the submission
    handleOpen();
  };

  return (
    <Grid container spacing={8} justifyContent="center" marginTop={2}>
      <Grid item xs={12} sm={8} md={6} lg={3}>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              size="small"
              margin="normal"
            />
            <TextField
              label="Last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              size="small"
              margin="normal"
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              size="small"
              name="age"
              value={formData.age}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Gender"
              variant="outlined"
              fullWidth
              size="small"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: "35%" }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Grid>

      {/* add the modal component with the dialog component */}
      <Modal open={open} onClose={handleClose}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Congratulations!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You are successfully registered.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Modal>
    </Grid>
  );
};

export default RegisterPage;

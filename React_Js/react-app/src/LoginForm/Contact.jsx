import React, { useState } from "react";
import { Link } from "react-router-dom";
// import the mui material components you need
import {
  ThemeProvider,
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

// import the icons you need
import {
  LinkedIn,
  GitHub,
  Twitter,
  Facebook,
  Instagram,
} from "@mui/icons-material";

export default function ContactForm() {
  // create a state variable for the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  // create a state variable for the success message
  const [success, setSuccess] = useState(false);

  // handle the input change events
  const handleChange = (e) => {
    const { name, value } = e.target;
    // update the form data state with the new value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // set the success state to true
    setSuccess(true);
    // clear the form data state
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  // handle the snackbar close event
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // set the success state to false
    setSuccess(false);
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={10} alignContent={"center"} marginTop={2}>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h3">Contact me</Typography>
          </Grid>
          <Grid item xs={12}> 
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Contact number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    fullWidth
                    required
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
            {/* add the links inside the Grid container */}
            <Grid item xs={12} textAlign={"center"} margin={2}>
              <Link href="#" target="">
                <LinkedIn
                  fontSize="medium"
                  color="primary"
                  sx={{ margin: "0.67rem" }}
                />
              </Link>
              <Link href="" target="">
                <GitHub
                  fontSize="medium"
                  color="primary"
                  sx={{ margin: "0.67rem" }}
                />
              </Link>
              <Link href="" target="">
                <Twitter
                  fontSize="medium"
                  color="primary"
                  sx={{ margin: "0.67rem" }}
                />
              </Link>
              <Link href="" target="">
                <Facebook
                  fontSize="medium"
                  color="primary"
                  sx={{ margin: "0.67rem" }}
                />
              </Link>
              <Link href="" target="">
                <Instagram
                  fontSize="medium"
                  color="primary"
                  sx={{ margin: "0.67rem" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* add the snackbar component with the alert component */}
      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

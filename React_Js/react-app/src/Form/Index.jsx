import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,
  Modal,
  Typography,
  Fade,
} from "@mui/material";

import Values from "./InitialValue";
import ValidationSchema from "./Validation";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: Values,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      if (activeStep === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        // Handle submission
        setOpen(true);
        console.log("Form submitted:", values);
      }
    },
  });

  const handleNext = () => {
    if (
      activeStep === 0 &&
      !formik.errors.firstName &&
      !formik.errors.lastName &&
      !formik.errors.username
    ) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (
      activeStep === 1 &&
      !formik.errors.email &&
      !formik.errors.phoneNumber &&
      !formik.errors.address &&
      !formik.errors.password &&
      !formik.errors.confirmPassword
    ) {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        marginTop={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step key={0}>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step key={1}>
              <StepLabel>Step 2</StepLabel>
            </Step>
          </Stepper>
          <Box sx={{ mt: 8 }}>
            <form onSubmit={formik.handleSubmit}>
              {activeStep === 0 ? (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.username &&
                          Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="address"
                        name="address"
                        label="Address"
                        value={formik.values.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.address &&
                          Boolean(formik.errors.address)
                        }
                        helperText={
                          formik.touched.address && formik.errors.address
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={formik.values.confirmPassword}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.confirmPassword &&
                          Boolean(formik.errors.confirmPassword)
                        }
                        helperText={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        value={formik.values.phoneNumber}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                        sx={{ width: "50%" }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              )}
              <Box display={"flex"} justifyContent={"space-around"} m={2} pl={2} pr={2}>
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <Button
                  onClick={handleNext}
                  variant="contained"
                  color="primary"
                >
                  {activeStep === 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </form>
          </Box>

          {/* Modal to display form values */}
          <Modal open={open} onClose={handleClose} closeAfterTransition>
            <Fade in={open}>
              <Box
                bgcolor="background.paper"
                p={4}
                borderRadius={4}
                width={400}
                mx="auto"
                mt={10}
                textAlign="center"
              >
                <Typography variant="h6" gutterBottom>
                  Form Values
                </Typography>
                {/* Display form values inside the modal */}
                {Object.entries(formik.values).map(([key, value]) => (
                  <Box key={key} mt={2}>
                    <Typography variant="body1">
                      <strong>{key}:</strong> {value}
                    </Typography>
                  </Box>
                ))}
                <Box mt={2}>
                  <Button
                    onClick={handleClose}
                    color="primary"
                    variant="contained"
                  >
                    Close
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MultiStepForm;

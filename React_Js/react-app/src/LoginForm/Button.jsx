import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Stack, Divider } from "@mui/material";

const ContainedButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate("/login");
  };

  const handleRegisterClick = () => {
    // Navigate to the register page
    navigate("/register");
  };

  return (
    <Stack
    variant= "outlined"
      sx={{
        rowGap: 2,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "lightgrey",
        p: 4, //padding
        borderRadius: 2,
        borderColor: "divider",
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: 1 }} align="center">
        Already have an account? Sign-in here:
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ marginTop: 2 }}
          onClick={handleLoginClick}
        >
          Sign in
        </Button>
      <Divider sx={{bgcolor:"grey"}}/>
      <Typography variant="body1" sx={{ margin: 1 }} align="center">
        Don't have an account? Sign-up here:
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ margin: 1 }}
          onClick={handleRegisterClick}
        >
          Sign up
        </Button>
    </Stack>
  );
};

export default ContainedButton;

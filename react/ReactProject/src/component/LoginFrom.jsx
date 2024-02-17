import React, { useState } from 'react';
import { TextField, Button, Box, Modal, Typography } from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
    backgroundColor: 'weite' ,// Adjust the color as needed
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
  }}
>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        margin="normal"
      />
      <Button
  variant="contained"
  onClick={handleSubmit}
  sx={{
    marginTop: 2,
    '&:hover': {
      backgroundColor: '#2E8B57' // Change to desired hover color
    }
  }}
>
  Submit
</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 8
          }}
        >
          <Typography variant="h6" gutterBottom>
            Form Data
          </Typography>
          <Typography variant="body1" gutterBottom>
            Name: {formData.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Password: {formData.password}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Confirm Password: {formData.confirmPassword}
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ marginTop: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default LoginForm;

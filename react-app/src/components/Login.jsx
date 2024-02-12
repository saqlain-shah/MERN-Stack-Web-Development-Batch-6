/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Button, Modal, Typography } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              size="small"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              Submit
            </Button>
            <Typography variant="body1" sx={{ marginTop: 2 }} align="center">
              {/* Don't have an account? <Link to="/register">Register here</Link> */}
            </Typography>
          </form>
        </Box>
      </Grid>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '80%' }}>
          <Typography variant="h5" gutterBottom>
            Submitted Data
          </Typography>
          <Typography variant="body1" gutterBottom>
            Username: {username}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Password: {password}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default LoginForm;

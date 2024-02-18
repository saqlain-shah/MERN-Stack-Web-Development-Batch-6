import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here, e.g., send data to an API or form endpoint
    console.log({ name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, ml: 1.5 }}>
        Send Message
      </Button>
    </Box>
  );
};

const ContactPage = () => {
  return (
    <Box sx={{ px: 4, py: 8 }}>
      <Typography variant="h1" component="h1" sx={{ mb: 4 }}>
        Contact Us
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default ContactPage;

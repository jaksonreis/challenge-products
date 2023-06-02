import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
  Grid,
  Link,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar sx={{ backgroundColor: 'secondary.main' }}>
              <PersonAddOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Create an Account
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                fullWidth
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                sx={{ marginTop: 2 }}
              />
              <TextField
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                sx={{ marginTop: 2 }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                Sign Up
              </Button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              Already have an account?{' '}
              <Link href="#" underline="hover">
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Signup;

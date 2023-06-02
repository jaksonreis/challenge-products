import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar sx={{ backgroundColor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={handleEmailChange}
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
                Sign In
              </Button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              Don't have an account?{' '}
              <Link href="#" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Login;

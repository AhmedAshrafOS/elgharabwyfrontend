// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple hardcoded check (replace with backend validation later)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAdmin', 'true'); // Store login status in localStorage
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      height="100vh"
      bgcolor="#1E2A38" // Matching the drawer background color
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#263447', // Slightly lighter shade for contrast
          textAlign: 'center',
          color: '#fff'
        }}
      >
        <Typography variant="h4" mb={3} sx={{ color: '#00ACC1', fontWeight: 600 }}>
          Admin Login
        </Typography>
        
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          InputLabelProps={{
            style: { color: '#b0bec5' }, // Label color
          }}
          InputProps={{
            style: { color: '#fff' }, // Text color
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#00ACC1', // Border color
              },
              '&:hover fieldset': {
                borderColor: '#4dd0e1', // Lighter border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ACC1', // Border color on focus
              },
            },
            mb: 2
          }}
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          InputLabelProps={{
            style: { color: '#b0bec5' },
          }}
          InputProps={{
            style: { color: '#fff' },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#00ACC1',
              },
              '&:hover fieldset': {
                borderColor: '#4dd0e1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ACC1',
              },
            },
            mb: 2
          }}
        />
        
        <Button 
          variant="contained" 
          onClick={handleLogin} 
          fullWidth
          sx={{
            mt: 2,
            bgcolor: '#00ACC1',
            color: '#1E2A38',
            '&:hover': {
              bgcolor: '#4dd0e1',
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;

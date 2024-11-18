// CreateBooking.js
import React, { useState } from 'react';
import { Box, TextField, Button,  MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const ManageBookings = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [age, setAge] = useState('');
  const today = new Date().toISOString().split("T")[0];

  const services = [
    { label: 'Consultation', value: 'consultation' },
    { label: 'Therapy Session', value: 'therapy' },
    { label: 'Follow-Up', value: 'followUp' },
    { label: 'Medical Checkup', value: 'checkup' },
    { label: 'Other Service', value: 'other' }
  ];

  const handleCreateBooking = async () => {
    const bookingData = {
      name,
      phoneNumber,
      age,
      date,
      service
    };

    try {


      await axios.post('https://content-reprieve-production.up.railway.app/api/bookings/sheets', bookingData);
      alert('Booking created successfully!');
      setName('');
      setPhone('');
      setDate('');
      setService('');
      setAge('');
    } catch (error) {
      console.error('Failed to create booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <Box
      width="100%"
      maxWidth="500px"
      mx="auto"
      p={4}
      borderRadius={2}
      bgcolor="#1E2A38"
      color="#fff"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)"
      sx={{
        '& .MuiTextField-root': {
          '& .MuiInputLabel-root': { color: '#b0bec5' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#00ACC1' },
            '&:hover fieldset': { borderColor: '#4dd0e1' },
            '&.Mui-focused fieldset': { borderColor: '#00ACC1' },
            color: '#fff',
          },
        },
      }}
    >


      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Phone"
        value={phoneNumber}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        slotProps={{htmlInput: { min: 5 }}}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Date"
        type="date"
        value={date}
        slotProps={{htmlInput: { min: today }}}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: '#b0bec5' }}>Service</InputLabel>
        <Select
          value={service}
          onChange={(e) => setService(e.target.value)}
          label="Service"
          sx={{
            color: '#fff',
            '.MuiOutlinedInput-notchedOutline': { borderColor: '#00ACC1' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4dd0e1' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00ACC1' },
          }}
        >
          {services.map((service) => (
            <MenuItem key={service.value} value={service.value}>
              {service.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={handleCreateBooking}
        fullWidth
        sx={{
          mt: 3,
          bgcolor: '#00ACC1',
          color: '#1E2A38',
          '&:hover': { bgcolor: '#4dd0e1' },
        }}
      >
        Create Booking
      </Button>
    </Box>
  );
};

export default ManageBookings;

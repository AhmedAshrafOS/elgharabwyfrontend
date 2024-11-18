import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import axios from "axios";


const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from the API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("https://content-reprieve-production.up.railway.app/api/bookings"); // Replace with your actual API endpoint
        setBookings(response.data); // Axios automatically parses JSON data
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://content-reprieve-production.up.railway.app/api/bookings/${id}`);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  
  // Handle "Add to Sheets" and delete action
  const handleAddToSheets = async (booking) => {
    try {
      // Send request to add booking to Google Sheets
      const sheetsResponse = await axios.post("https://content-reprieve-production.up.railway.app/api/bookings/sheets", booking);

      if (sheetsResponse.status === 200) {
        // If successfully added to Google Sheets, delete booking from the database
        await axios.delete(`https://content-reprieve-production.up.railway.app/api/bookings/${booking.id}`);
        setBookings((prevBookings) => prevBookings.filter((b) => b.id !== booking.id));
        alert(`Booking for ${booking.name} successfully added to Sheets and removed from the database.`);
      }
    } catch (error) {
      console.error("Error adding booking to Sheets or deleting:", error);
      alert(`Failed to process booking for ${booking.name}.`);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      bgcolor="#1E2A38" // Matching the drawer background
      py={5} // Padding for spacing
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2} width="100%">
        {bookings.map((booking) => (
          <Card
            key={booking.id}
            sx={{
              width: { xs: '250px', sm: '300px', md: '320px' },
              minHeight: '250px',
              padding: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#263447', // Slightly lighter shade for card contrast
              color: '#ffffff',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#00ACC1' }}>
                Name: {booking.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                Phone: {booking.phoneNumber}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                Age: {booking.age}
              </Typography>
              <Typography variant="body2" sx={{ color: '#4dd0e1', fontWeight: 500 }}>
                Date: {new Date(booking.date).toLocaleDateString()}
              </Typography>
            </CardContent>

            <Box display="flex" justifyContent="center" gap={1}>
              <Button
                variant="outlined"
                onClick={() => handleAddToSheets(booking)}
                sx={{
                  mt: 2,
                  borderColor: '#4caf50',
                  color: '#4caf50',
                  '&:hover': {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                  },
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                Add to Sheets
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleDelete(booking.id)}
                sx={{
                  mt: 2,
                  borderColor: '#f44336',
                  color: '#f44336',
                  '&:hover': {
                    backgroundColor: '#f44336',
                    color: '#fff',
                  },
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                Delete
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ViewBookings;

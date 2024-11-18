import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextField, Button, Box, Typography, MenuItem, Select } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

import axios from "axios";
const BookingAppointment = () => {
    const { t } = useTranslation();
    const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    date: "",
    phoneNumber: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear the error when the user starts typing
    });
  };

  const validateForm = () => {

    let tempErrors = {};
    if (!formData.name) tempErrors.name = t("errorName");
    if (!formData.age) tempErrors.age = t("errorAge");
    if (!formData.date) tempErrors.date = t("errorDate");
    if (!formData.phoneNumber) tempErrors.phoneNumber = t("errorPhone");
    if (!formData.service) tempErrors.service = t("errorService");
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Returns true if no errors
  };
  const getClientId = () => {
    let clientId = localStorage.getItem("X-Client-Id");
    if (!clientId) {
        clientId = `client-${Date.now()}-${Math.floor(Math.random() * 1000)}`; // Generate unique ID
        localStorage.setItem("X-Client-Id", clientId); // Store it in localStorage
    }
    return clientId;
};
  const handleSubmit = async (e) => {
    const clientId = getClientId();
    e.preventDefault();

    if (!validateForm()) {
        return; // Stop if the form is invalid
    }

    try {
        const response = await axios.post("https://content-reprieve-production.up.railway.app/api/bookings", formData, {
            headers: {
                "X-Client-Id": clientId, // Custom header for client ID
                "Content-Type": "application/json"
            }
        });

        // If request was successful
        const data = response.data;
        setSuccessMessage(`Appointment successfully booked for ${data.date}`);
        setFormData({
            name: "",
            age: "",
            date: "",
            phoneNumber: "",
            service: "",
        });
        setErrors({});
    } catch (error) {


        
        // Check if the error is a rate-limiting error
        if (error.response && error.response.status === 429) {
            alert("Too many requests. Please try again later."); // Display rate-limit alert
        } else {
            console.error("Error:", error);
            setSuccessMessage("Failed to book appointment");
        }
    }
};

  return (
    <>
      <Header/>
      <dev class="background"/>
      <Box sx={{ background: "#f2f7faa4", maxWidth: 500, margin: "auto auto 100px auto", padding: 3, boxShadow: 20, borderRadius: 2, mt: 4 }}>
        <Typography color="var(--primary-color)" sx={{fontFamily:"Cairo", fontWeight:700}} variant="h4" gutterBottom textAlign={"center"}>{t("bookingHead")}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t("name")}
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 ,
                direction: "ltr",

             
                "& .MuiOutlinedInput-root": {
                   
                    "&.Mui-focused fieldset": {
                
                      borderColor: "var(--primary-color)", // Your desired focus color
                    },
                    "&.Mui-focused": {
                        color: "var(--primary-color)", // Text color on focus
                      },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
               
                    color: "var(--primary-color)", // Label color on focus
                  },

            }}
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            label={t("age")}
            name="age"
            type="number"
        
            fullWidth
            value={formData.age}
            onChange={handleChange}
            slotProps={{htmlInput: { min: 5 }}}
            sx={{ mb: 2 ,
                direction: "ltr",
                "& .MuiOutlinedInput-root": {
                 
                    "&.Mui-focused fieldset": {
                
                      borderColor: "var(--primary-color)", // Your desired focus color
                    },
                    "&.Mui-focused": {
                        color: "var(--primary-color)", // Text color on focus
                      },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "var(--primary-color)", // Label color on focus
                  },

            }}
            error={!!errors.age}
            helperText={errors.age}
          />

          <TextField
              label={t("date")}
              name="date"
              type="date"
              fullWidth
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              slotProps={{htmlInput: { min: today }}} // Set the min date to today
              sx={{ mb: 2,
                  "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                          borderColor: "var(--primary-color)", // Your desired focus color
                      },
                      "&.Mui-focused": {
                          color: "var(--primary-color)", // Text color on focus
                      },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                      color: "var(--primary-color)", // Label color on focus
                  },
              }}
              error={!!errors.date}
              helperText={errors.date}
          />

          <TextField
        
            label={t("phoneNumber")}
            name="phoneNumber"
            type="tel"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleChange}
            sx={{ mb: 2 ,

                "& .MuiOutlinedInput-root": {
                 
                    "&.Mui-focused fieldset": {
                
                      borderColor: "var(--primary-color)", // Your desired focus color
                    },
                    "&.Mui-focused": {
                        color: "var(--primary-color)", // Text color on focus
                      },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "var(--primary-color)", // Label color on focus
                  },

            }}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />

            <Select
            name="service"
            fullWidth
            value={formData.service}
           
            onChange={handleChange}
            displayEmpty
            sx={{
                mb: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "grey", // Default border color
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)", // Border color when focused
                },
                "& .MuiSelect-select": {
                    fontFamily:"Cairo",
                    color: "black", // Default text color
                },
                "&.Mui-focused .MuiSelect-select": {
                    
                    color: "var(--primary-color)", // Text color when focused
                },
            }}
            error={!!errors.service}
            >
                <MenuItem value="" disabled>{t("selectService")}</MenuItem>
                <MenuItem value={t("serviceOne")}>{t("serviceOne")}</MenuItem>
                <MenuItem value={t("serviceTwo")}>{t("serviceTwo")}</MenuItem>
                <MenuItem value={t("serviceThree")}>{t("serviceThree")}</MenuItem>
                <MenuItem value={t("serviceFour")}>{t("serviceFour")}</MenuItem>
            </Select>
          {errors.service && (
            <Typography color="error" variant="body2">
              {errors.service}
            </Typography>
          )}

          <Button 
            type="submit" 
            variant="contained" 
            sx={{
              fontFamily:"Cairo",
              color: "var(--footer-color)",
              background: "var(--primary-color)",
              '&:hover': {
                color: 'var(--primary-color)',
                backgroundColor: 'var(--fourth-color)',
              },
            }} 
            fullWidth
          >
            {t("booking")}
          </Button>
        </form>

        {successMessage && (
          <Typography variant="body1" color="success" sx={{ mt: 2 }}>
            {successMessage}
          </Typography>
        )}
      </Box>
      <Footer/>
    </>
  );
};

export default BookingAppointment;

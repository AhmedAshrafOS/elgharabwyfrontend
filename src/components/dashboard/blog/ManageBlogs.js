import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Select, MenuItem, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Section = ({ section, index, handleSectionChange, handleDeleteSection }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 4,
        border: '1px solid #4dd0e1',
        borderRadius: 2,
        backgroundColor: '#263447',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        padding: 3,
        color: '#fff',
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#00ACC1' }}>
        {`Section ${index + 1}`}
      </Typography>
      
      <TextField
        label="Section Heading"
        fullWidth
        value={section.heading}
        onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
        sx={{
          mb: 2,
          '& .MuiInputLabel-root': { color: '#b0bec5' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#4dd0e1' },
            '&:hover fieldset': { borderColor: '#00ACC1' },
            '&.Mui-focused fieldset': { borderColor: '#00ACC1' },
            color: '#fff',
          },
        }}
      />

      <Select
        value={section.type}
        onChange={(e) => handleSectionChange(index, 'type', e.target.value)}
        fullWidth
        sx={{
          mb: 2,
          color: '#fff',
          '.MuiOutlinedInput-notchedOutline': { borderColor: '#4dd0e1' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#00ACC1' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00ACC1' },
        }}
      >
        <MenuItem value="text">Text</MenuItem>
        <MenuItem value="image">Image URL</MenuItem>
        <MenuItem value="video">Video URL</MenuItem>
      </Select>

      {section.type === 'text' && (
        <ReactQuill
          theme="snow"
          value={section.body}
          onChange={(value) => handleSectionChange(index, 'body', value)}
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike'],        
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['clean']                                         
            ],
          }}
          placeholder="Write your section body here..."
          style={{
            color:'black',
            marginBottom: '16px',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        />
      )}

      {(section.type === 'image' || section.type === 'video') && (
        <TextField
          label={`${section.type === 'image' ? 'Image' : 'Video'} URL`}
          fullWidth
          value={section.mediaUrl}
          onChange={(e) => handleSectionChange(index, 'mediaUrl', e.target.value)}
          sx={{
            mb: 2,
            '& .MuiInputLabel-root': { color: '#b0bec5' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#4dd0e1' },
              '&:hover fieldset': { borderColor: '#00ACC1' },
              '&.Mui-focused fieldset': { borderColor: '#00ACC1' },
              color: '#fff',
            },
          }}
        />
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteSection(index)}
          sx={{ 
            color: '#f44336', 
            borderColor: '#f44336', 
            '&:hover': {
              backgroundColor: '#f44336',
              color: '#fff',
            },
          }}
        >
          Delete Section
        </Button>
      </Box>
    </Box>
  );
};

const ManageBlogs = () => {
  const [title, setTitle] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [sections, setSections] = useState([]);

  const addSection = () => {
    setSections([...sections, { heading: '', body: '', type: 'text', mediaUrl: '' }]);
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleDeleteSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const blogData = {
      title,
      coverImageUrl,
      sections,
    };
  
    try {
      const response = await axios.post('https://content-reprieve-production.up.railway.app/api/blog', blogData);
      console.log("Blog saved successfully:", response.data);
      alert("Blog saved successfully!");
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        alert(`Error: ${error.response.data}`);
      } else {
        console.error("Error submitting blog data:", error);
        alert("An error occurred while submitting the blog data.");
      }
    }
  };

  return (
    <Box
   
      flexGrow={1}
      sx={{

        p: 4,
        minWidth: 600,
        maxWidth: 900,
        borderRadius: 2,
        bgcolor: '#1E2A38',
        color: '#fff',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      }}
    >


      <TextField
        label="Blog Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiInputLabel-root': { color: '#b0bec5' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#4dd0e1' },
            '&:hover fieldset': { borderColor: '#00ACC1' },
            '&.Mui-focused fieldset': { borderColor: '#00ACC1' },
            color: '#fff',
          },
        }}
      />

      <TextField
        label="Cover Image URL"
        fullWidth
        value={coverImageUrl}
        onChange={(e) => setCoverImageUrl(e.target.value !== ""? e.target.value : "https://i0.wp.com/nftartwithlauren.com/wp-content/uploads/2024/01/laurenmcdonaghpereiraphoto_A_beach_sunset_with_a_horseback_ri_db01a57e-5be8-4887-9d40-80528f1d2ca4_1.png?resize=1024%2C574&ssl=1")}
        sx={{
          mb: 3,
          '& .MuiInputLabel-root': { color: '#b0bec5' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#4dd0e1' },
            '&:hover fieldset': { borderColor: '#00ACC1' },
            '&.Mui-focused fieldset': { borderColor: '#00ACC1' },
            color: '#fff',
          },
        }}
      />

      <Divider sx={{ my: 3, borderColor: '#4dd0e1' }} />

      {sections.map((section, index) => (
        <Section
        
          key={index}
          section={section}
          index={index}
          handleSectionChange={handleSectionChange}
          handleDeleteSection={handleDeleteSection}
        />
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button 
          variant="outlined" 
          onClick={addSection} 
          sx={{
            color: '#00ACC1',
            borderColor: '#00ACC1',
            '&:hover': {
              backgroundColor: '#00ACC1',
              color: '#1E2A38',
            },
          }}
        >
          Add New Section
        </Button>
      </Box>

      <Button 
        variant="contained" 
        fullWidth 
        onClick={handleSubmit}
        sx={{
          bgcolor: '#00ACC1',
          color: '#1E2A38',
          '&:hover': { bgcolor: '#4dd0e1' },
        }}
      >
        Create Blog
      </Button>
    </Box>
  );
};

export default ManageBlogs;

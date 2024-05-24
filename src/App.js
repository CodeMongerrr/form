import React from 'react';
import { Typography, Box, Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import './App.css';

const Input = styled('input')({
  display: 'none',
});

function App() {
  return (
    <div className="fullscreen-container">
      <Box className="upload-box">
        <Typography variant="h4" gutterBottom>
          Blockchain Security Audit Tool
        </Typography>
        <form action="/upload" method="post" encType="multipart/form-data" className="form-container">
          <Box className="upload-area">
            <label htmlFor="file-upload">
              <Input id="file-upload" type="file" name="file" multiple />
              <IconButton color="primary" component="span">
                <CloudUploadIcon sx={{ fontSize: 50 }} />
              </IconButton>
              <Typography variant="body1" style={{ color: '#fff', marginLeft: '10px' }}>
                Drag and drop files here or click to upload
              </Typography>
            </label>
          </Box>
          <Typography variant="body2" style={{ color: '#aaa', marginBottom: '20px' }}>
            Limit 200MB per file • <b><i>.sol / .rs</i></b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default App;

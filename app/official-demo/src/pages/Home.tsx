import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" gutterBottom>
        Welcome to EchoNuraToka
      </Typography>
      <Typography variant="body1" paragraph>
        A full-stack customer service system with WebRTC capabilities.
      </Typography>
      <Button variant="contained" size="large" component={Link} to="/chat">
        Start Chat
      </Button>
    </Box>
  );
}

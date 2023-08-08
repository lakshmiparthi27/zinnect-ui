import React from 'react'
import Profile from './features/Profile/Profile'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container fixed> */}
        <Box sx={{ bgcolor: '#F3F4F7', height: '100vh' }}>
          <Profile />
          {/* <img src='abcd.PNG' /> */}
        </Box>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default App;

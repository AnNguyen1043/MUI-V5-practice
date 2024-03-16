import React from 'react'
import Grid from '@mui/material/Grid';
import jobs from "../jobs.json"
import { Container } from '@mui/system';
import JobCard from '../components/JobCard';
import PaginationButton from '../components/PaginationButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function HomePage() {


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        
        <Grid container spacing={2} mt={1}>
          {jobs.slice(0,5).map((job)=> (
            <Grid key={job.id} item xs={12} md={6} lg={4}>
              <JobCard job={job}/>
            </Grid>
          ))}
        </Grid>
        
        <Grid mt={2}>
          {<PaginationButton/>}
        </Grid>
        
      </Container>
    </ThemeProvider>
    
  );
}

export default HomePage

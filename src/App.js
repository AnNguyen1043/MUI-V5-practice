import React from 'react'
import SearchAppBar from './components/SearchAppBar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import {Routes, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {  red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9E9E9E',
    },
    secondary: {
      main: '#D32F2F',
    },
  },
});

function App() {
  return (
    
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/job/:id" element={<DetailPage/>}> </Route>
        </Routes>
      </ThemeProvider>
    </div>
    
  )
}

export default App

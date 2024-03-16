import * as React from 'react';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function SkillChip({skill}) {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#C62828',
          },
          secondary: {
            main: '#FFC400',
          },
        },
      });

  return (
    <ThemeProvider theme={theme}>
      <Chip label={skill} color='primary'mr={1}/>
    </ThemeProvider>
  );
}
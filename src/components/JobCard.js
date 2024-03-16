import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SkillChip from './SkillChip';
import { lime,purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';



export default function JobCard({job}) {
  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
    },
  });

  const navigate= useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Card onClick={()=> navigate(`/job/${job.id}`)}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.title}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {job.skills.slice(0,4).map((skill)=> (<SkillChip skill={skill}/>))}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Requirements: {job.description}
            </Typography>

            <Stack alignItems="center" spacing={2}>
            <Button variant="contained" color='primary'>Detail</Button>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}

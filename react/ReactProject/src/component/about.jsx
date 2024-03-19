import React from 'react';
import { Box, Container, Grid, Typography, Paper, Stack, Chip } from '@mui/material';

const AboutPage = () => {
  // Your data (replace with your actual information)
  const aboutInfo = {
    name: 'Anjum ',
    bio: 'As a MERN stack developer, WordPress whiz, SEO strategist, and digital marketing expert, I bring a unique blend of technical and creative skills to the table. I can build dynamic web applications using my MERN expertise, craft engaging WordPress websites, and leverage data-driven SEO to skyrocket your search ranking. My content creation and social media savviness further amplify your brand message, while my problem-solving mentality ensures optimal solutions. A lifelong learner, Im constantly sharpening my skills to stay ahead of the curve. Lets collaborate and take your digital presence to the next leve',
    projects: [
      {
        name: 'Project 1',
        description: 'Short description of the project.',
        link: '#',
      },
      {
        name: 'Project 2',
        description: 'Short description of the project.',
        link: '#',
      },
    ],
    skills: ['MERN Stack', 'Digital markiting', 'Wordpress Development', 'SEO'],
  };

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Container maxWidth="md">
        {/* About Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              {aboutInfo.name}
            </Typography>
            <Typography variant="body1">{aboutInfo.bio}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="subtitle1">Contact</Typography>
              {/* Add your contact information (e.g., email, social media links) */}
            </Paper>
          </Grid>
        </Grid>

        {/* Projects Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {aboutInfo.projects.map((project) => (
              <Grid item key={project.name} xs={12} md={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="subtitle1">{project.name}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Explore Project
                  </a>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Skills & Expertise
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {aboutInfo.skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" sx={{ mb: 1 }} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;

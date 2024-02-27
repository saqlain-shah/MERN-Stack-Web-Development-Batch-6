import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
  CardContent,
  CardHeader,
  Chip,
  Rating,
  Divider,
} from "@mui/material";

export default function About() {
  return (
    <React.Fragment>
      <Grid container spacing={10} marginTop={2}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h3">About me</Typography>
        </Grid>
        <Grid item>
          <Box sx={{ p: 2, display: "flex" }}>
            <Grid item xs={12} md={6}>
              <img
                width="100%"
                src="./src/LoginForm/assets/about_bg.jpg"
                alt="About"
              />
            </Grid>
            <Grid item xs={12} md={6} marginLeft={2} marginRight={2}>
              <Typography variant="h4">Jalal Hussain</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                labore nihil obcaecati consequatur. Debitis error doloremque,
                vero eos vel nemo eius voluptatem dicta tenetur modi musica
                delectus dolore fugiat exercitationem a, ipsum quidem quo enim
                natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Harum non necessitatibus
                deleniti eum soluta.. <br /> <br /> La musica delectus dolore
                fugiat exercitationem a, ipsum quidem quo enim natus accusamus
                labore dolores nam. Unde. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Harum non necessitatibus deleniti
                eum soluta.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" href="#">
                  Download CV
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} marginLeft={2} marginRight={2}>
          <Divider>
            <Typography variant="h4">My Skills</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} marginLeft={2} marginRight={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">Html5</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  80%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "80%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">Css3</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  95%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "95%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">JavaScript</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  75%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "75%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">ReactJS</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  50%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            {/* add more skill items here */}
          </Grid>
        </Grid>
        <Grid item xs={12} marginLeft={2} marginRight={2}>
          <Divider>
            <Typography variant="h4">My Projects</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} marginLeft={2} marginRight={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "secondary.main" }}
                    aria-label="project"
                  >
                    J
                  </Avatar>
                }
                title="Login Form"
                subheader="February 17, 2024"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This is a sample project that I created using React and MUI.
                  It has some cool features and a nice design.
                </Typography>
                <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                  <Chip label="React" variant="contained" sx={{ mr: 1 }} />
                  <Chip label="JS" variant="outlined" sx={{ mr: 1 }} />
                  <Chip label="HTML" variant="contained" sx={{ mr: 1 }} />
                  <Chip label="MUI" variant="outlined" sx={{ mr: 1 }} />
                  <Rating name="project-rating" value={3} readOnly />
                </Box>
              </CardContent>
            </Grid>
            {/* add more project items here */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

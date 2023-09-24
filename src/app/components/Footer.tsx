"use client";
import { Container, Stack, Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Footer() {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        backgroundColor: "red",
        ml: "200px",
        // backgroundImage: "url('/app/main-background.jpg')",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        // position: "fixed",
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis debitis rem minima ducimus totam pariatur vel asperiores et hic?
    </Container>
  );
}

export default Footer;

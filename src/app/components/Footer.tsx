"use client";
import { Container, Stack, Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Footer(props) {
  console.log("props", props?.props)
  const footerStyles = props?.props;

  const theme = useTheme();
  return (
    <Container
      component="footer"
      maxWidth={false}
      disableGutters={true}
      sx={{
        ...footerStyles,
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        sx={{
          p: 2,
        }}
      >
        <Box
          component="img"
          src="/app/Logo.svg"
          alt="alt"
          sx={{
            width: "63px",
            height: "20px",
            objectFit: "contain",
          }}
        />
      </Stack>
    </Container>
  );
}

export default Footer;

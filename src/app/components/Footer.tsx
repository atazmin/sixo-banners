"use client";
import { Container, Stack, Box, useTheme } from "@mui/material";
import Link from "@/app/components/Link";
import { globalStyles } from "@/app/components/Styles";

function Footer() {
  const theme = useTheme();

  return (
    <Container
      component="footer"
      maxWidth={false}
      disableGutters={true}
      sx={{
        [theme.breakpoints.up("md")]: {
          ml: globalStyles.headerWidth,
          width: `calc(100% - ${globalStyles.headerWidth})`,
        },
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        sx={{
          p: 2,
        }}
      >
        <Link href="/">
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
        </Link>
      </Stack>
    </Container>
  );
}

export default Footer;

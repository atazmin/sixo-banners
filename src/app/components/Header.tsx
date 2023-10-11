"use client";
import { Stack, Box, useTheme } from "@mui/material";
import React from "react";
import Link from "@/app/components/Link";
import { globalStyles } from "@/app/components/Styles";

function Header() {
  const theme = useTheme();

  return (
    <Stack
      component="header"
      alignItems={{ xs: "center" }}
      sx={{
        p: theme.spacing(2),
        mb: 2,
        [theme.breakpoints.up("md")]: {
          position: "fixed",
          zIndex: 100,
          top: 0,
          left: 0,
          backgroundColor: theme.palette.grey[200],
          width: globalStyles.headerWidth,
          height: "100%",
        },
      }}
    >
      <Link href="/">
        <Box
          component="img"
          src="/app/CACU_Sta_RGB.svg"
          alt="alt"
          sx={{
            alignSelf: "center",
            width: "168px",
            height: "55px",
            objectFit: "contain",
          }}
        />
      </Link>
    </Stack>
  );
}

export default Header;

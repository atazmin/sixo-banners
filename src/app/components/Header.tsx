"use client";
import { Container, Stack, Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FullscreenNavigation from "./FullscreenNavigation";
import React, { useState, useRef } from "react";

function Header(props) {
  console.log("props", props?.props)
  const theme = useTheme();
  const headerStyles = props?.props;

 
  return (
    <Stack
      component="header"
      sx={{
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        p: 2,
        backgroundColor: theme.palette.tertiary.main,
        height: "100%",
        ...headerStyles,
      }}
    >
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
    </Stack>
  );
}

export default Header;

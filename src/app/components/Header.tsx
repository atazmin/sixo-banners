"use client";
import { Container, Stack, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FullscreenNavigation from "./FullscreenNavigation";
import React, { useState, useRef } from "react";
import { Opacity } from "@mui/icons-material";

function Header(this: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box
      sx={{
        border: "3px solid red",
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        backgroundColor: "green",
        width: "200px",
        height: "100%",
      }}
    >
      Headere Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nam?
    </Box>
  );
}

export default Header;

"use client";
import Image from "next/image";
import React, {
  useLayoutEffect,
  useReducer,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  useTheme,
  alpha,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
  Link as MuiLink,
} from "@mui/material";

// const StyledLink = styled(Link)(({ theme }) => ({
//   color: theme.palette.common.black,
//   textDecoration: "none",
//   ":hover": {
//     textDecoration: "underline",
//   }
// }));

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters={true}
      >
       Coming soon!

      </Container>
     
    </>
  );
}

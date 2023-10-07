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
  useMediaQuery,
  alpha,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { red, blue, green, grey } from "@mui/material/colors";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterOutlinedIcon from "@mui/icons-material/Twitter";
import SouthIcon from "@mui/icons-material/South";
import { styled } from "@mui/system";
import styles from "./page.module.css";
import Header from "./components/Header";
import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "@/app/components/Link";
gsap.registerPlugin(ScrollTrigger);


const sectionContainerStyles = {
  position: "relative",
  overflow: "hidden",
  minHeight: "100vh",
};

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "70%",
  },
}));

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const StyledImage = styled(Image)(({ theme }) => ({}));

  const [progress, setProgress] = useState<number>(0);
  const progressRef = useRef(null);
  const pageContainerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const progressElement = progressRef.current;
      const pageContainerElement = pageContainerRef.current;
      const progressTimeline = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: document.body,
          start: 0,
          end: "max",
          onUpdate: (self) => {
            setProgress(parseFloat((self.progress * 100).toFixed(3)));
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          ".MuiLinearProgress-root": {
            height: 2,
          },
        }}
      >
        <LinearProgress
          ref={progressRef}
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: "transparent",
            ".MuiLinearProgress-bar": {
              backgroundColor: theme.palette.grey[500],
            },
          }}
        />
      </Box>

      {/* ------------------------- 2023 ------------------------- */}
      <Container
        maxWidth={false}
        disableGutters={breakpointUpMd}
      >
        <Typography component="h1" variant="h3" sx={{
          mb: 10,
        }}>Online Media</Typography>

        <Section
          component="section"
          sx={{}}
        >
          <Typography component="h3" variant="h4">2023</Typography>
          <Link href="/2023/10/display-html-visa-150-promo-q4">Display HTML - Visa $150 Promo (Q4 2023)</Link> – October
        </Section>
      </Container>
    </>
  );
}

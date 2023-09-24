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

gsap.registerPlugin(ScrollTrigger);


const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  damping: 0.07,
  // plugins: {
  //   overscroll: { ...overscrollOptions },
  // },
};

const sectionContainerStyles = {
  //border: "3px solid brown",
  position: "relative",
  overflow: "hidden",
  minHeight: "100vh",
  // py: 10
};

const sectionGridStyles = {
  // border: "3px solid green",
  minHeight: "inherit",
};

const textStyles = {
  //maxWidth: 500,
  pt: 1,
};

const sectionNumberStyles = {
  //pt: 6,
  lineHeight: 1.3,
  pt: 1,
};

const sectionHeading2Styles = {
  mb: 6,
};

export default function Home() {
  const StyledImage = styled(Image)(({ theme }) => ({}));

  const [progress, setProgress] = useState<number>(0);
  const progressRef = useRef(null);


  const pageContainerRef = useRef(null);
  const section0Ref = useRef(null);

  const section1Ref = useRef(null);
  const section1TextsRef = useRef(null);
  const section1Text1Ref = useRef(null);
  const section1Text2Ref = useRef(null);
  const section1ImagesRef = useRef<HTMLImageElement>(null);
  const section1Image1Ref = useRef(null);
  const section1Image2Ref = useRef(null);

  const section2Ref = useRef(null);
  const section2Text1Ref = useRef(null);
  const section2ImageRef = useRef(null);

  const section3Ref = useRef(null);
  const section3TextsRef = useRef(null);
  const section3Text1Ref = useRef(null);
  const section3Text2Ref = useRef(null);
  const section3ImagesRef = useRef(null);
  const section3Image1Ref = useRef(null);
  const section3Image2Ref = useRef(null);

  const section4Ref = useRef(null);
  const section4Text1Ref = useRef(null);
  const section4Text2Ref = useRef(null);
  const section4ImageContainerRef = useRef(null);
  const section4ImageRef = useRef(null);

  const section5Ref = useRef(null);
  const section5TextsRef = useRef(null);
  const section5Text1Ref = useRef(null);
  const section5Text2Ref = useRef(null);
  const section5Text3Ref = useRef(null);
  const section5ImagesRef = useRef(null);
  const section5Image1Ref = useRef(null);
  const section5Image2Ref = useRef(null);
  const section5Image3Ref = useRef(null);

  const section6Ref = useRef(null);
  const section6ImageRef = useRef(null);
  const section6Image1Ref = useRef(null);
  const section6Image2Ref = useRef(null);
  const section6Text1Ref = useRef(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    let mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      const progressElement = progressRef.current;
      const pageContainerElement = pageContainerRef.current;

      const progressTimeline = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          scrub: true,
          trigger: document.body,
          // trigger: pageContainerElement,
          start: 0,
          end: "max",
          // onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          onUpdate: (self) => {
            // console.log(
            //   "progress:",
            //   self.progress,
            //   "direction:",
            //   self.direction,
            //   "velocity",
            //   self.getVelocity()
            // );
            setProgress(parseFloat((self.progress * 100).toFixed(3)));
          },
        },
      });
      // progressTimeline.fromTo(progressElement, { x: 0 }, { xPercent: 100 });
      mm.add("(min-width: 900px)", () => {
   

      });
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  const [zip, setZip] = useState("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setZip(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://ziplook.house.gov/htbin/findrep_house?ZIP=" + zip;
    window.open(url, "_blank");
  };

  const theme = useTheme();

  return (
    <
    >
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 10000,
          ".MuiLinearProgress-root": {
            // height: 10,
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
              backgroundColor: "tertiary.main",
            },
          }}
        />
      </Box>

      {/* ------------------------- 2023 ------------------------- */}
      <Container
        maxWidth={false}
        // disableGutters={true}
        sx={{
          // ...sectionContainerStyles,
          // border: "3px solid red",
          // height: "100vh",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            // ...sectionGridStyles,
            // [theme.breakpoints.down("md")]: {
            //   pt: 30,
            // },
            // height: "100%",
          }}
        >
          lorem10 
        </Grid>
      </Container>
     
    </>
  );
}

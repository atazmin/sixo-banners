"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import {
  Drawer,
  AppBar,
  Typography,
  Toolbar,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  Menu,
  MenuItem,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
  //   alpha,
  useTheme,
  useMediaQuery,
  Container,
  MenuList,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { alpha } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterOutlinedIcon from "@mui/icons-material/Twitter";
import { Squash as Hamburger } from "hamburger-react";

interface Props {
  toggle(val: any): any;
  isOpen: boolean;
}

const menuItems = [
  {
    name: "Meet Susan",
    href: "#section-1",
  },
  {
    name: "Barriers To Care",
    href: "#section-2",
  },
  {
    name: "Treatment Denied",
    href: "#section-3",
  },
  {
    name: "Your Health, Their Profit",
    href: "#section-4",
  },
  {
    name: "Beacons of Hope",
    href: "#section-5",
  },
  {
    name: "Under Attack",
    href: "#section-6",
  },
  {
    name: "A Call to Action",
    href: "#section-7",
  },
];

function FullscreenNavigation(props: Props) {
  //const [props.isOpen, setprops.isOpen] = useState(false); // prod
  // const [props.isOpen, setprops.isOpen] = useState(true); // test
  const drawer = useRef(null);
  const theme = useTheme();
  // const toggle = () => {
  //   setprops.isOpen(!props.isOpen);
  // };
  const StyledImage = styled(Image)(({ theme }) => ({
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "block",
    objectFit: "cover",
    objectPosition: "50% 50%",
    maxHeight: "600px",
  }));

  const handleItemClick = (data: { name: string; href: string }) => {
    window.location.href = data.href;
    //setprops.isOpen(!props.isOpen);
    props.toggle(false);
  };

  return (
    <>
      <Stack
        ref={drawer}
        sx={{
          //border: "30px solid brown",
          position: "fixed",
          top: 0,
          left: "50%",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          willChange: "transform",
          transform: props.isOpen
            ? "translate3d(-50%, 0%, 0)"
            : "translate3d(-50%, -100%, 0)",
          transitionProperty: "transform",
          transitionDuration: "0.25s",
          transitionTimingFunction: "ease-out",
          // transitionTimingFunction: "cubic-bezier(0.055, 0.895, 0.000, 0.990)",
          // backgroundColor: "white",
          backgroundImage: "url('/app/main-background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            // border: "1px solid blue",
            height: "inherit",
            backgroundImage: "url('/app/Your Pain Solo.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom 10% right 10%",
            backgroundSize: "200px 200px !important;",
            [theme.breakpoints.up("md")]: {
              backgroundSize: "auto",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              flexGrow: 1,
              // border: "5px solid blue",
              height: "inherit",
              // overflow: "hidden",
              pt: 8,
            }}
          >
            <Grid
              md={5}
              mdOffset={1}
              sx={
                {
                  // border: "10px solid blue",
                  // height: "inherit",
                }
              }
            >
              <Stack
                justifyContent="center"
                // alignItems="center"
                sx={{
                  // border: "15px solid red",
                  height: "100%",
                }}
              >
                <MenuList
                  sx={{
                    mb: 3,
                    pb: 3,
                  }}
                >
                  {menuItems.map((item, index) => (
                    <MenuItem
                      key={item.name}
                      onClick={() => handleItemClick(item)}
                      sx={{
                        // border: "3px solid red",
                        // pl: 0,
                        ml: -2,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          // border: "3px solid red",
                          fontSize: 20,
                          color: theme.palette.common.black,
                          alignSelf: "flex-end",
                          mr: 2,
                        }}
                      >
                        {++index}.
                      </ListItemIcon>
                      <Typography variant="h3">{item.name}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
                <Stack flexDirection="row" spacing={4} useFlexGap>
                  <IconButton
                    aria-label="facebook"
                    sx={{
                      p: 0,
                    }}
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=Healthcare-Here&url=${location.href}`
                      )
                    }
                  >
                    <TwitterOutlinedIcon
                      sx={{
                        color: "common.black",
                        fontSize: 50,
                        filter: "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))",
                      }}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="facebook"
                    sx={{
                      p: 0,
                    }}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${location.href}`
                      )
                    }
                  >
                    <FacebookOutlinedIcon
                      sx={{
                        color: "common.black",
                        fontSize: 50,
                        filter: "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              md={6}
              sx={
                {
                  // border: "15px solid red",
                  // overflowY: "hidden",
                }
              }
            >
              <Stack
                // flexDirection="row"
                // justifyContent="flex-end"
                // alignItems="flex-end"
                sx={{
                  // border: "15px solid blue",
                  height: "100%",
                  // mr: "-24px",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="/app/cover.svg"
                  alt="alt"
                  sx={{
                    // border: "15px solid green",
                    position: "absolute",
                    // position: "relative",
                    left: 0,
                    bottom: "-10%",
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="flex-end"
        sx={{
          // //border: "3px solid green",
          height: "100%",
          ".hamburger-react": {
            //border: "5px solid red",
            "& > div:nth-of-type(3) > div": {
              ...(!props.isOpen && {
                left: "24px !important",
                width: "17px !important",
              }),
            },
          },
        }}
      >
        <Hamburger
          toggled={props.isOpen}
          toggle={props.toggle}
          size={34}
          direction="left"
          rounded={true}
          label="Show menu"
          // color={props.isOpen ? "white" : "black"}
        />
      </Stack>
    </>
  );
}

export default FullscreenNavigation;

"use client";
import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/system";
import Link from "@/app/components/Link";
import { data2024, data2023 } from "@/app/data";

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const totalItems2024 = data2024.length;
  const totalItems2023 = data2023.length;

  return (
    <Container maxWidth={false} disableGutters={breakpointUpMd}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          mb: 10,
        }}
      >
        Online Media
      </Typography>
      <Section component="section">
        <Typography component="h3" variant="h4">
          2024
        </Typography>
        <List sx={{ 
          width: "100%", 
          bgcolor: "background.paper" 
        }}>
          {data2024.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              divider
              sx={{
                justifyContent: "space-between",
                flexDirection: "column",
                [theme.breakpoints.up("md")]: {
                  flexDirection: "row",
                },
              }}
            >
              <Link
                href={item.dir}
              >
                <Typography
                  component="span"
                  sx={{
                    mr: 1,
                    mb: 1,
                    fontWeight: 300,
                    fontSize: ".75rem",
                    [theme.breakpoints.up("md")]: {
                      mb: 0
                    }
                  }}
                >
                  {totalItems2024 - index}
                </Typography>
                {item.name}
              </Link>
              <MuiLink
                component="a"
                href={item.download}
                target="_blank"
                sx={{
                  display: "inline-flex",
                  color: "inherit",
                  textDecoration: "none",
                  flexShrink: 0,                  
                  alignItems: "center",
                  alignSelf: "flex-start",
                  py: 2,
                  ":hover": {
                    textDecoration: "underline",
                  },
                  [theme.breakpoints.up("md")]: {
                    p: 2,
                  },
                }}
              >
                Download Package <DownloadIcon />
              </MuiLink>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section component="section">
        <Typography component="h3" variant="h4">
          2023
        </Typography>
        <List sx={{ 
          width: "100%", 
          bgcolor: "background.paper" 
        }}>
          {data2023.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              divider
              sx={{
                justifyContent: "space-between",
                flexDirection: "column",
                [theme.breakpoints.up("md")]: {
                  flexDirection: "row",
                },
              }}
            >
              <Link
                href={item.dir}
              >
                <Typography
                  component="span"
                  sx={{
                    mr: 1,
                    mb: 1,
                    fontWeight: 300,
                    fontSize: ".75rem",
                    [theme.breakpoints.up("md")]: {
                      mb: 0
                    }
                  }}
                >
                  {totalItems2023 - index}
                </Typography>
                {item.name}
              </Link>
              <MuiLink
                component="a"
                href={item.download}
                target="_blank"
                sx={{
                  display: "inline-flex",
                  color: "inherit",
                  textDecoration: "none",
                  flexShrink: 0,                  
                  alignItems: "center",
                  alignSelf: "flex-start",
                  py: 2,
                  ":hover": {
                    textDecoration: "underline",
                  },
                  [theme.breakpoints.up("md")]: {
                    p: 2,
                  },
                }}
              >
                Download Package <DownloadIcon />
              </MuiLink>
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  );
}

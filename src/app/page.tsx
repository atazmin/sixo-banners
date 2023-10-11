"use client";
import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  List,
  IconButton,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
  Link as MuiLink,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/system";
import Link from "@/app/components/Link";
import { data } from "@/app/data";

const Section = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxWidth: "70%",
  },
}));

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));

  console.log("data", data);
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
          2023
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
              divider
              sx={{ justifyContent: "space-between" }}
            >
              <Link href={item.dir}>{item.name}</Link>
              <MuiLink
                component="a"
                href={item.download}
                target="_blank"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "inherit",
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline",
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

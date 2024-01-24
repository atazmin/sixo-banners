"use client";
import {
  Container,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { bannerStyles } from "@/app/components/Styles";

export default function Home() {
  const theme = useTheme();
  const breakpointUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth={false} disableGutters={breakpointUpMd}>
      <Breadcrumbs pageName="Display HTML - KC Chiefs Checking FEB Ext - Jan. 24" />
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/728x90/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/728x90/728x90.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>
      <Grid container rowSpacing={8} columnSpacing={5}>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>160x600</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/160x600/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/160x600/160x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x600</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/300x600/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/300x600/300x600.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
        <Grid xs="auto">
          <Typography sx={{ ...bannerStyles.heading }}>300x250</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/300x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/300x250/300x250.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/320x50/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/320x50/320x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/23/display-html-kc-chiefs-checking-feb-ext/300x50/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/23/display-html-kc-chiefs-checking-feb-ext/300x50/300x50.png"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>
        </Grid>
      </Grid>
    </Container>
  );
}

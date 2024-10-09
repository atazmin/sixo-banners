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
      <Breadcrumbs pageName="Display HTML - STL Brand Refresh Q4 2024 - 2. Talk of the town - 10-09" />
      <Grid container rowSpacing={8}>
        <Grid xs={12}>
          <Typography sx={{ ...bannerStyles.heading }}>728x90</Typography>
          <MuiLink
            component="a"
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/728x90/html/728x90/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/728x90/static/728x90.jpg"
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
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/160x600/html/160x600/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/160x600/static/160x600.jpg"
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
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x600/html/300x600/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x600/static/300x600.jpg"
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
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x250/html/300x250/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x250/static/300x250.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>320x50</Typography>
          <MuiLink
            component="a"
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/320x50/html/320x50/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/320x50/static/320x50.jpg"
              alt="alt"
              sx={{
                ...bannerStyles.image,
              }}
            />
          </MuiLink>

          <Typography sx={{ ...bannerStyles.heading }}>300x50</Typography>
          <MuiLink
            component="a"
            href="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x50/html/300x50/"
            target="_blank"
            sx={{ ...bannerStyles.link }}
          >
            <Box
              component="img"
              src="/24/display-html-stl-brand-refresh-q4-2024-2-talk-of-the-town-10-09/300x50/static/300x50.jpg"
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

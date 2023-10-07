import {
  Typography,
  useTheme,
  Breadcrumbs as MuiBreadcrumbs,
  Divider,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "@/app/components/Link";

function Breadcrumbs({ pageName }: { pageName: string }) {
  const theme = useTheme();

  return (
    <>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link href="/" sx={{ position: "relative", pl: 3 }}>
          <KeyboardArrowLeftIcon
            sx={{
              mr: 0.5,
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
            fontSize="inherit"
          />
          Back
        </Link>
        <Typography color="text.primary">{pageName}</Typography>
      </MuiBreadcrumbs>
      <Divider
        sx={{
          my: 3,
        }}
      />
    </>
  );
}

export default Breadcrumbs;

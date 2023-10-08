import {
  Roboto
} from "next/font/google";
import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
import { Palette } from "@mui/icons-material";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  interface Palette {
    tertiary: Palette["primary"];
    black: Palette["primary"];
    yellow: Palette["primary"];
    blue: Palette["primary"];
    green: Palette["primary"];
    amber: Palette["primary"];
    orange: Palette["primary"];
    cyan: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    amber?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    cyan?: PaletteOptions["primary"];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
    "button-emphasis": true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      lighter: "#FEE41E",
      light: "#E6BA1C",
      main: "#FDBB2B",
      dark: "#E6911C",
      darker: "#FE801E",
    },
    secondary: {
      lighter: "#F5F5F5",
      light: "#f7f7f7",
      main: "#e7e7e7",
      dark: "#787878",
      darker: "#2e2e2e",
    },
    tertiary: {
      // light: "#ff0000",
      main: "#EAEAEA",
      dark: "#979797",
      contrastText: "#787878",
    },
    yellow: {
      lighter: "#FEE41E",
      light: "#E6BA1C",
      main: "#FDBB2B",
      dark: "#E6911C",
      darker: "#FE801E",
    },
    black: {
      lighter: "#6B6B6B",
      light: "#333333",
      main: "#1f1f1f",
    },
    blue: {
      lighter: "#5195EE",
      light: "#096BEB",
      main: "#4202d4",
      dark: "#00367c",
      darker: "#2e2e2e",
    },
    green: {
      light: "#94B35B",
      main: "#76A422",
      dark: "#648A1D",
    },
    amber: {
      light: "FFA64D",
      main: "#ff8201",
      dark: "#CC6600",
    },
    orange: {
      lighter: "#FFD8CF",
      light: "#FF724F",
      main: "#F35B33",
      dark: "#BF4628",
      darker: "#802F1B",
    },
    cyan: {
      light: "#49A3B8",
      main: "#2B5F6B",
      dark: "#214952",
    },
    background: {
      // default: "#dcdacb",
    },
    text: {
      // primary: "#1f1f1f",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    body1: {
      // fontFamily: roboto.style.fontFamily,
      // fontSize: 24,
    },
    body2: {
      // fontFamily: roboto.style.fontFamily,
      // fontSize: 20,
      // paddingTop: 18,
    },
    primary: {
      fontFamily: roboto.style.fontFamily,
    },
    secondary: {
      fontFamily: roboto.style.fontFamily,
    },
    h1: {
      fontFamily: roboto.style.fontFamily,
      // fontSize: "6.6rem", //100px
      // fontSize: 100,
      // fontWeight: 400,
      // lineHeight: 1,
      //letterSpacing: 0.8,
    },
    h2: {
      fontFamily: roboto.style.fontFamily,
      // fontSize: "4.5rem", // 72px
      // color: "red",
      // fontWeight: 400,
      // lineHeight: 1,
      //letterSpacing: 0.7,
    },
    h3: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h4: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 700,
      borderBottom: "1px solid #979797",
      marginBottom: 24,
      paddingBottom: 12,
    },
    // action: {
    //   color: "#775B0D",
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1200,
      desktop: 1600,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          // color: theme.palette.common.black,
        },
      },
    },
    //   MuiLinearProgress: {
    //     styleOverrides: {
    //       root: {
    //         height: 2,
    //       },
    //       colorPrimary: {
    //         backgroundColor: alpha(theme.palette.blue.main, 0.35),
    //       },
    //       bar: {
    //         backgroundColor: theme.palette.blue.main,
    //       },
    //     },
    //   },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "transparent",
    //       boxShadow: "none",
    //     },
    //   },
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       wordWrap: "break-word",
    //     },
    //   },
    // },
    // MuiTextField: {
    //   variants: [
    //     {
    //       props: { variant: "outlined" },
    //       style: {
    //         backgroundColor: theme.palette.common.white,
    //         "& .MuiOutlinedInput-notchedOutline": {
    //           borderRadius: 0,
    //         },
    //         label: {
    //           "&.Mui-focused": {
    //             backgroundColor: theme.palette.primary.main,
    //             color: theme.palette.common.white,
    //             padding: "0 5px",
    //             marginLeft: "-2.5px",
    //           },
    //         },
    //       },
    //     },
    //   ],
    // },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       whiteSpace: "pre-wrap",
    //     },
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       textTransform: "none",
    //       borderRadius: 0,
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { variant: "green" },
    //       style: {
    //         backgroundColor: theme.palette.yellow.main,
    //         color: theme.palette.common.white,
    //         "&:hover": {
    //           backgroundColor: theme.palette.yellow.light,
    //         },
    //       },
    //     },
    //     {
    //       props: { size: "large" },
    //       style: {
    //         padding: theme.spacing(1.5, 3),
    //         fontSize: "1rem",
    //       },
    //     },
    //     {
    //       props: { size: "xlarge" },
    //       style: {
    //         padding: theme.spacing(1.5, 3),
    //         fontSize: "1.25rem",
    //         textTransform: "uppercase",
    //       },
    //     },
    //   ],
    // },
    // MuiSkeleton: {
    //   styleOverrides: {
    //     root: {
    //       "::after": {
    //         background:
    //           "linear-gradient( 90deg, transparent, rgba(0, 0, 0, 0.25), transparent )",
    //       },
    //     },
    //   },
    // },
    // MuiLink: {
    //   variants: [
    //     {
    //       props: { variant: "button-emphasis" },
    //       style: {
    //         position: "relative",
    //         display: "flex",
    //         backgroundColor: theme.palette.green.main,
    //         color: theme.palette.common.white,
    //         padding: theme.spacing(3, 4),
    //         borderRadius: 50,
    //         fontWeight: 600,
    //         letterSpacing: 3,
    //         textTransform: "uppercase",
    //         textDecoration: "none",
    //         transform: "translateY(0)",
    //         transition:
    //           "background-color 0.3s ease, transform 0.3s ease, letter-spacing 0.3s ease",

    //         "&::before": {
    //           content: '""',
    //           position: "absolute",
    //           height: "3px",
    //           borderRadius: "50%",
    //           // backgroundColor: alpha(theme.palette.black.main, 1),
    //           top: "100%",
    //           filter: "blur(3px)",
    //           left: "50%",
    //           width: "25%",
    //           transform: "translateY(3px) scale(.85)",
    //           transition:
    //             "background-color 0.3s ease, transform 0.3s ease, width 0.3s ease, margin-left 0.3s ease, blur 0.3s ease",
    //         },

    //         "&:hover": {
    //           backgroundColor: theme.palette.green.main,
    //           transform: "translateY(-10px)",
    //           bottom: 0,

    //           "&::before": {
    //             height: "10px",
    //             filter: "blur(5px)",
    //             backgroundColor: alpha(theme.palette.black.main, 0.75),
    //             transform: "translateY(10px) scale(.85)",
    //             width: "100%",
    //             // left: "0%",
    //             marginLeft: "-50%",
    //           },
    //         },
    //       },
    //     },
    //   ],
    // },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

import { createTheme } from '@mui/material';

const VERDANA = `'Verdana', sans-serif`;
const VERDANA_BOLD = `'Verdana Bold', sans-serif`;

const theme = createTheme({
  breakpoints: {
    preDesktop: '1199.9px',
    desktop: '1200px',
    preTablet: '767.5px',
    tablet: '768px',
    mobile: '320px',
  },
  color: {
    white: '#FFFF',
    orange: '#FC842D',
    blue: '#264061',
    grey: '#9B9FAA',
    bgGrey: '#F0F1F3',
    black: '#212121',
    inputColor: '#E0E0E0',
  },
  fonts: {
    verdana: VERDANA,
    verdanaBold: VERDANA_BOLD,
  },
  fontSize: {
    xs: '14px',
    s: '18px',
    m: '24px',
    l: '26px',
    xl: '34px',
    xxl: '48px',
  },
  h1: {
    fontFamily: VERDANA_BOLD,
    fontSize: '14px',
    lineHeight: '1.4',
    color: '#212121',
  },
  components: {
    MuiButton: {
      width: '160px',
      height: '17px',
      fontFamily: 'verdanaBold',
      lineHeight: '1.2px',
      textAlign: 'center',
      color: '#FFFF',
      backgroundColor: '#FC842D',
      borderRadius: '30px',
      boxShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
      dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    },
  },
  options: {
    buttonShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
    time: '250ms',
  },
});

export default theme;

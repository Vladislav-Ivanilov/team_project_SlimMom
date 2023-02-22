import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const VERDANA = `'Verdana', sans-serif`;
const VERDANA_BOLD = `'Verdana Bold', sans-serif`;

const COLOR = {
  orange: '#FC842D',
  white: '#FFFF',
  blue: '#264061',
  grey: '#9B9FAA',
  bgGrey: '#F0F1F3',
  black: '#212121',
  inputColor: '#E0E0E0',
};


const breakpoints = createBreakpoints({
  lg: 1200,
  md: 768,
  sm: 320,
});

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1200,
      md: 768,
      sm: 320,
    },
  },
  palette: {
    primary: {
      main: '#FC842D',
      white: '#FFFF',
      blue: '#264061',
      grey: '#9B9FAA',
      bgGrey: '#F0F1F3',
      black: '#212121',
      inputColor: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: {
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
      // главный заголовок
      fontFamily: VERDANA_BOLD,
      fontSize: '18px',
      lineHeight: '1.4',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '34px',
      [breakpoints.up('md')]: {
        fontSize: '34px',
        marginBottom: '68px',
      },
    },
    h2: {
      //       Your recommended daily
      // calorie intake is
      fontFamily: VERDANA_BOLD,
      fontSize: '18px',
      lineHeight: '1.4',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '42px',
      [breakpoints.up('md')]: {
        fontSize: '26px',
        marginBottom: '20px',
        textAlign: 'center',
      },
    },
    h3: {
      // 2800 ккал
      fontFamily: VERDANA_BOLD,
      fontSize: '48px',
      lineHeight: '1.2',
      fontWeight: 700,
      textAlign: 'center',
      color: COLOR.blue,
      marginBottom: '32px',
    },
    h4: {
      /* Foods you should not eat */
      fontFamily: VERDANA_BOLD,
      fontSize: '14px',
      lineHeight: '1.2',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '20px',
    },
    li: {
      fontFamily: VERDANA,
      fontWeight: 400,
      fontSize: '14px',
      marginBottom: '10px',
    },
  },
  component: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: ({ theme: t }) => ({
            color: COLOR.white,
            height: '17px',
            fontFamily: t.typography.fontFamily.verdanaBold,
            lineHeight: '1.2',
            textAlign: 'center',
            backgroundColor: t.palette.primary.main,
            borderRadius: '30px',
            boxShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
            dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
          }),
        },
      ],
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

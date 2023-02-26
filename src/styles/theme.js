import { createTheme } from '@mui/material/styles';

const VERDANA = `'Verdana', sans-serif`;
const VERDANA_BOLD = `'Verdana Bold', sans-serif`;

const COLOR = {
  orange: '#FC842D',
  darkOrange: '#be611e',
  white: '#FFFF',
  blue: '#264061',
  grey: '#9B9FAA',
  bgGrey: '#F0F1F3',
  black: '#212121',
  inputColor: '#E0E0E0',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1200,
      xl: 1536,
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
      dark: '#be611e',
    },
  },
  typography: {
    fontFamily: {
      verdana: VERDANA,
      verdanaBold: VERDANA_BOLD,
    },
    h1: {
      // главный заголовок
      fontFamily: VERDANA_BOLD,
      fontSize: 18,
      lineHeight: '1.4',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '34px',
    },
    h2: {
      //       Your recommended daily
      // calorie intake is
      fontFamily: VERDANA_BOLD,
      fontSize: 18,
      lineHeight: '1.4',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '42px',
    },
    h3: {
      // 2800 ккал
      fontFamily: VERDANA_BOLD,
      fontSize: 48,
      lineHeight: '1.2',
      fontWeight: 700,
      textAlign: 'center',
      color: COLOR.blue,
      marginBottom: '32px',
    },
    h4: {
      /* Foods you should not eat */
      fontFamily: VERDANA_BOLD,
      fontSize: 14,
      lineHeight: '1.2',
      fontWeight: 700,
      color: COLOR.black,
      marginBottom: '20px',
    },
    h5: {
      /* Login/ register */
      fontFamily: VERDANA_BOLD,
      fontSize: 14,
      lineHeight: '1.2',
      textTransform: 'uppercase',
      color: COLOR.orange,
      marginBottom: '60px',
    },
    li: {
      fontFamily: VERDANA,
      fontWeight: 400,
      fontSize: 14,
      marginBottom: '10px',
    },
    liSummery: {
      fontFamily: VERDANA,
      fontWeight: 400,
      fontSize: 14,
      marginBottom: '10px',
    },
    ol: {
      paddingLeft: '17px',
      maxWidth: '330px',
    },
    p: {
      fontFamily: VERDANA_BOLD,
      fontSize: 14,
      lineHeight: '1.2',
      color: '#212121',
      textTransform: 'Capitalize',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.checked === true ? { color: '#FC842D' } : { color: '#9B9FAA' }),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'standard' &&
            ownerState.color === 'primary' && {
              fontFamily: VERDANA_BOLD,
              fontSize: '14px',
              lineHeight: 1.2,
            }),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'standard' &&
            ownerState.color === 'primary' && {
              fontFamily: VERDANA_BOLD,
              fontSize: '14px',
              lineHeight: 1.2,
            }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: COLOR.orange,
              color: COLOR.white,
              fontFamily: VERDANA_BOLD,
              fontWeight: 700,
              fontSize: 14,
              textTransform: 'capitalize',
              padding: '13px 25px',
              minWidth: '181px',
              borderRadius: '30px',
              textAlign: 'center',
              boxShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
              dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,

              '&:hover': {
                backgroundColor: COLOR.darkOrange,
              },
            }),
          ...(ownerState.variant === 'circular' &&
            ownerState.color === 'primary' && {
              backgroundColor: COLOR.orange,
              color: COLOR.white,
              boxShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
              dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
              borderRadius: '50%',
              padding: '12px',
              minWidth: '48px',

              '&:hover': {
                backgroundColor: COLOR.darkOrange,
              },
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              color: COLOR.orange,
              fontFamily: VERDANA_BOLD,
              fontWeight: 700,
              fontSize: 14,
              textTransform: 'capitalize',
              padding: '13px 25px',
              borderRadius: '30px',
              textAlign: 'center',
              minWidth: '181px',
            }),

          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              padding: '0',

              '&:hover': {
                color: COLOR.darkOrange,
              },
            }),
        }),
      },
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

import { Box, Typography } from '@mui/material';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        //   justifyContent: 'center',
        alignItems: 'center',
        padding: {
          sm: '40px 20px 175px 20px',
          md: '160px 0px 0px 32px',
          lg: '160px 0px 0px 16px',
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: ' 14px',
          lineHeight: '1.2',
          textTransform: 'uppercase',
          color: ' #FC842D',
          // textAlign: { sm: 'center', md: 'left' },
          marginBottom: { sm: '55px' },
        }}
        variant="h6"
      >
        Log In
      </Typography>
      <LoginForm />
    </Box>
  );
};

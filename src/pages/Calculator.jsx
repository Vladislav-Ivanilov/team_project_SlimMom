import { CalculateForm } from 'components/CalculateForm/CalculateForm';
import { Box, Typography } from '@mui/material';

export const CalculatorPage = () => {
  return (
    <>
      <Box component="main" sx={{ display: 'flex' }}>
        <Box
          component="div"
          sx={{
            paddingTop: {
              sm: '32px',
              md: '100px ',
              lg: '140px ',
            },
            paddingLeft: {
              sm: '20px',
              md: '32px ',
              lg: '16px ',
            },
            paddingBottom: {
              sm: '100px',
              md: '398px ',
              lg: '111px ',
            },
            paddingRight: { sm: '20px' },
            marginLeft: { sm: 'auto', md: '0' },
            marginRight: { sm: 'auto', md: '0' },
          }}
        >
          <Typography component="h1" variant="h1">
            Calculate your daily calorie
            <br />
            intake right now
          </Typography>
          <CalculateForm />
        </Box>
      </Box>
    </>
  );
};

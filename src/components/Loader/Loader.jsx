import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="main" />
    </Stack>
  );
}

// sx={{
//   width: { xs: '100px', sm: '250px', md: '400px' },
//   color: { xs: 'primary', sm: 'info', md: 'secondary' },
// }}

{/* <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          ></Stack> */}
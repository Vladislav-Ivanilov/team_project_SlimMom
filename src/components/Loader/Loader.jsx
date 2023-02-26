import { Stack, CircularProgress } from '@mui/material/';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="main" />
    </Stack>
  );
}

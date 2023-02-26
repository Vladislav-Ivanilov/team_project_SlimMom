import { IconButton, Box } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export const GoBack = () => {
  return (
    <Box sx={{ backgroundColor: '#EFF1F3', padding: '17px 20px ', marginBottom: '40px' }}>
      <IconButton href="/team_project_SlimMom">
        <KeyboardReturnIcon />
      </IconButton>
    </Box>
  );
};

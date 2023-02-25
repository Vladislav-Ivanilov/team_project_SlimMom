import { useSelector, useDispatch } from 'react-redux';

import { Box, Button, Typography } from '@mui/material';

import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';
import Divider from '@mui/material/Divider';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
      <Typography variant='p' component='p' sx={{marginRight: '20px'}}>{userName}</Typography>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          display: { xs: 'none', lg: 'block' },
          marginTop: '35px',
          height: '32px',
          border: '2px solid #E0E0E0',
        }}
      />
      <Button type="button" variant="text" onClick={() => dispatch(logout())}>
      <Typography variant='p' component='p' sx={{color: '#9B9FAA'}}>Exit</Typography>
      </Button>
    </Box>
  );
};

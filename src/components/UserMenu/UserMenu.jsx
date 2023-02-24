import { useSelector, useDispatch } from 'react-redux';

import { Box, Button } from '@mui/material';

import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Box>
      <p>{userName}</p>
      <Button type="button" variant="text" onClick={() => dispatch(logout())}>
        Exit
      </Button>
    </Box>
  );
};

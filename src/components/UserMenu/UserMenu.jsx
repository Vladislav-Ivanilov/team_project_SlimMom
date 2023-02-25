import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export const UserMenu = ({ handleOpenMenu, toggle }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <>
      <Box>
        <Box sx={{ display: 'flex', alignItems: { xs: 'center', md: 'flex-end' } }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: { md: 'center' } }}>
            <Typography variant="p" component="p" sx={{ marginRight: '20px' }}>
              {userName}
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: 'block',
                height: '32px',
                border: '2px solid #E0E0E0',
              }}
            />
            <Button type="button" variant="text" onClick={() => dispatch(logout())}>
              <Typography variant="p" component="p" sx={{ color: '#9B9FAA' }}>
                Exit
              </Typography>
            </Button>
          </Box>

          <IconButton sx={{ display: { lg: 'none' } }} onClick={() => handleOpenMenu()}>
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

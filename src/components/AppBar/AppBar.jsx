import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import { Logo } from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Typography, Button, Box, IconButton, Divider } from '@mui/material';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [toggle, setToggle] = useState(false);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const location = useLocation();

  const handleOpenMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header>
        <Box
          sx={{
            display: 'flex',
            justifyContent: isLoggedIn ? 'space-between' : { xs: 'space-between', lg: 'flex-start' },
            width: '100%',
            alignItems: { xs: 'center', lg: 'flex-end' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Logo />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: 'none', lg: 'block' },
                marginRight: '20px',
                marginTop: '35px',
                height: '32px',
                border: '2px solid #E0E0E0',
              }}
            />

            {isLoggedIn && <Navigation />}
          </Box>

          <Box>{isLoggedIn ? <UserMenu handleOpenMenu={handleOpenMenu} toggle={toggle} /> : <AuthNav />}</Box>
        </Box>

        <Box>{toggle && <BurgerMenu handleOpenMenu={handleOpenMenu} />}</Box>
      </Header>
      {isLoggedIn && (
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            backgroundColor: '#EFF1F3',
            marginBottom: '32px',
            height: '40px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {location.pathname === '/diary' && (
              <IconButton sx={{ color: '#000000' }} href="/team_project_SlimMom">
                <KeyboardReturnIcon />
              </IconButton>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 'auto' }}>
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
                  padding: '4px, 0',
                }}
              />
              <Button type="button" variant="text" onClick={() => dispatch(logout())}>
                <Typography variant="p" component="p" sx={{ color: '#9B9FAA' }}>
                  Exit
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

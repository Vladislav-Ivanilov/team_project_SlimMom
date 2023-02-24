import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';

import { Logo } from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import Divider from '@mui/material/Divider';
import {Box} from '@mui/material'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
<Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
  <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
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

<Box>
{isLoggedIn ? <UserMenu /> : <AuthNav />}
</Box>
</Box>
    </Header>
  );
};

import { useAuth } from 'hooks';
import {Header} from './AppBar.styled'

import Logo from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import Divider from '@mui/material/Divider';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
        <Logo/>
        <Divider orientation="vertical" flexItem 
        sx={{display: {xs: 'none', lg: 'block'}, marginRight: '20px', marginTop: '35px', height: '32px', border: '2px solid #E0E0E0'}}/>
        {isLoggedIn && <Navigation />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

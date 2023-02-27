import logoMain from '../Image/logoMain.png';
import logoName from '../Image/LogoName.png';
import logoDesc from '../Image/logoDesc.png';
import { Container, LogoImg, LogoText, LogoDesc } from './Logo.styled';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const Logo = () => {
  const { isLoggedIn } = useAuth();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <NavLink to="/diary">
      <LogoDesc src={logoDesc} alt="logo" />
      <Container>
        <LogoImg src={logoMain} alt="logo" />
        {mobile && !isLoggedIn ? '' : <LogoText src={logoName} alt="slim_mom" />}
      </Container>
    </NavLink>
  );
};

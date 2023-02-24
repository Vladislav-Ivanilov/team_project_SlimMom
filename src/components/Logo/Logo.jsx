import logoMain from '../Image/logoMain.png';
import logoName from '../Image/LogoName.png';
import logoDesc from '../Image/logoDesc.png';
import { Container, LogoImg, LogoText, LogoDesc } from './Logo.styled';

export const Logo = () => {
  return (
    <a href="./">
      <LogoDesc src={logoDesc} alt="logo" />
      <Container>
        <LogoImg src={logoMain} alt="logo" />
        <LogoText src={logoName} alt="slim_mom" />
      </Container>
    </a>
  );
};

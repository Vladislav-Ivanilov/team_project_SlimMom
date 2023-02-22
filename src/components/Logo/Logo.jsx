import logoMain from "../Image/logoMain.png";
import logoName from "../Image/LogoName.png";
import { Container, LogoImg, LogoText } from './Logo.styled'

const Logo = () => {
    return (
      
        <a href="./">
            <Container>
            <LogoImg src= {logoMain} alt="logo" />
            <LogoText src={logoName} alt="slim_mom" />
 {/* <Box
  sx={{
    display: {
      xs: isLoggedIn ? 'flex' : 'none',
      md: 'flex',
      lg: 'none',
    },
  }}
></Box> */}
            </Container>
        </a>
    )
}

export default Logo
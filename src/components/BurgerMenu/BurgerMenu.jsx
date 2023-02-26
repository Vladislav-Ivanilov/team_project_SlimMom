import { Box } from '@mui/material';
import { Container, NavLinkStyle, ListMenu } from './BurgerMenu.styled';

export const BurgerMenu = ({ handleOpenMenu }) => {
  return (
    <Container>
      <Box component="nav">
        <ListMenu>
          <li>
            <NavLinkStyle onClick={() => handleOpenMenu()} to="/diary">
              Diary
            </NavLinkStyle>
          </li>
          <li>
            <NavLinkStyle onClick={() => handleOpenMenu()} to="/">
              Calculator
            </NavLinkStyle>
          </li>
        </ListMenu>
      </Box>
    </Container>
  );
};

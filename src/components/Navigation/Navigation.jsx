import { Ul, NavLinkStyles } from '../AuthNav/AuthNav.styled';
import { Box } from '@mui/material';

export const Navigation = () => {
  return (
    <Box component="nav" sx={{ display: { xs: 'none', lg: 'block' } }}>
      <Ul>
        <li>
          <NavLinkStyles to="/diary">Diary</NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles to="/">Calculator</NavLinkStyles>
        </li>
      </Ul>
    </Box>
  );
};

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
`;

export const NavLinkStyles = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #9b9faa;
  margin-right: 14px;

  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fc842d;
  }

  &.active {
    color: #212121;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 24px;
  }
`;

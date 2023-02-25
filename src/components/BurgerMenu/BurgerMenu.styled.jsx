import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #264061;
  width: 100vw;
  height: 1200px;
  z-index: 2000;
`;

export const NavLinkStyle = styled(NavLink)`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  &:focus {
    color: #9b9faa;
  }
  @media (max-width: 1199px) {
    font-size: 24px;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 60px;
  @media (max-width: 1199px) {
    padding-top: 100px;
  }
`;

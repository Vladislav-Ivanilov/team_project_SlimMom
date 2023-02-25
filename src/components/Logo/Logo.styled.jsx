import styled from 'styled-components';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
  xl: '1536px',
};

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoDesc = styled.img`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: block;
    width: 167px;
    height: 66px;
    margin-right: 20px;
  }
`;

export const LogoImg = styled.img`
  width: 46px;
  height: 44px;
  margin-right: 10px;

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const LogoText = styled.img`
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    width: 105px;
    height: 16px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

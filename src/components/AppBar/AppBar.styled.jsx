import styled from 'styled-components';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
  xl: '1536px',
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px 20px;
  border-bottom: 2px solid #e0e0e0;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 20px 32px 16px 32px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 80px 16px 10px 16px;
    border-bottom: none;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

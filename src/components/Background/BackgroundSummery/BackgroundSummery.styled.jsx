import styled, { keyframes }  from 'styled-components';
import leavesTablet from '../../Image/leaves-bottom_1280.png';
import leavesDesc from '../../Image/leaves-right_1280.png';


const animDesc = keyframes`
  0% {
    transform: translatex(420px);
  }

  100% {
    transform: translatex(0);
  }
`;

const animTabl = keyframes`
  0% {
    transform: translatey(420px);
  }

  100% {
    transform: translatey(0);
  }
`;

export const BGContainer = styled.div`
display: none;
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -1000;
  width: 100vw;
  min-height: 1160px;
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: -1000;
    width: 100vw;
    min-height: 1024px;
    height: 100%;
    overflow: hidden;
  }
  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: -1000;
    width: 100vw;
    height: 100%;
    min-height: 768px;
    overflow: hidden;
  }
`;

export const BgImages = styled.div`
  @media screen and (min-width: 768px) {
    width: 362px;
    height: 369px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-image: url(${leavesTablet});
    background-repeat: no-repeat;

    animation: ${animTabl} 1s;

  }
  @media screen and (min-width: 1200px) {
    width: 505px;
    height: 777px;
    position: absolute;
    top: 35px;
    right: 0px;
    background-image: url(${leavesDesc});
    background-repeat: no-repeat;

    animation: ${animDesc} 1s;
  }
`;

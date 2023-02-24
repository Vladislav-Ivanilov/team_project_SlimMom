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
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -1000;
  width: 100vw;
  /* min-height: 1160px; */
  overflow: hidden;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: -1000;
    width: 100vw;
    /* min-height: 1024px; */
    height: 1000px;
    overflow: hidden;

  }
  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    z-index: -1000;
    width: 100vw;
    height: 850px;
    /* min-height: 768px; */
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
    height: 659px;
    position: absolute;
    top: 30px;
    right: 0px;
    background-image: url(${leavesDesc});
    background-repeat: no-repeat;

    animation: ${animDesc} 1s;
  }
`;

export const WhiteWrapp = styled.div`
  background-color: #fff;
  min-height: 659px;

  @media (min-width: 1200px){
    min-height: 850px;
  }

  @media (min-width: 768px){
    min-height: 690px;
  }

`

export const GreyWrapp = styled.div`
  background-color: #F0F1F3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 433px;
  padding: 40px 20px;

  @media (min-width: 768px){
    min-height: 326px;
    align-items: flex-start;
    padding: 80px 32px;
  }

  @media (min-width: 1200px){
    min-height: 850px;
    height: 100%;
    align-items: center;
    padding: 0 106px;
  }


`

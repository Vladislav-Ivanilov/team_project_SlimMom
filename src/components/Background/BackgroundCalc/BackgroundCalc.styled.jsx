import styled, { keyframes } from 'styled-components';
import bgTablet from '../../Image/bg_768.png';
import bgDesc from '../../Image/bg_1280.png';
import strawberry from '../../Image/Strawberry_1280.png';
import leaves from '../../Image/leaves_1280.png';
import banana from '../../Image/Banan_1280.png';

const desktop = keyframes`
  0% {
    transform: translatex(420px);
  }

  100% {
    transform: translatex(0);
  }
`;

const tablet = keyframes`
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
  top: 0;
  right: 0;
  z-index: -1000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: block;
    min-height: 1024px;
    height: 100%;
  }
  @media screen and (min-width: 1200px) {
    min-height: 850px;
  }
`;

export const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    top: 461px;
    right: -32px;
    width: 553px;
    height: 750px;
    background-image: url(${bgTablet});
  }
  @media screen and (min-width: 1200px) {
    top: 34px;
    right: 0;
    width: 603px;
    height: 816px;
    background-image: url(${bgDesc});
  }
`;

export const Strawberry = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    top: 547px;
    right: 68px;
    width: 265px;
    height: 273px;
    background-image: url(${strawberry});

    animation: ${tablet} 1s;
  }
  @media screen and (min-width: 1200px) {
    top: 458px;
    right: 2px;
    width: 362px;
    height: 374px;
    background-image: url(${strawberry});

    animation: ${desktop} 1s;
  }
`;

export const Leaves = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    right: 215px;
    top: 455px;
    width: 531px;
    height: 602px;
    transform: rotate(90deg);
    background-image: url(${leaves});
  }
  @media screen and (min-width: 1200px) {
    top: 0;
    right: 195px;
    width: 746px;
    height: 846px;
    transform: rotate(0);
    background-image: url(${leaves});
  }
`;

export const Banana = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    top: 693px;
    right: -249px;
    width: 740px;
    height: 527px;
    background-image: url(${banana});

    animation: ${tablet} 1s;
  }
  @media screen and (min-width: 1200px) {
    top: -10px;
    right: -287px;
    width: 773px;
    height: 552px;
    background-image: url(${banana});

    animation: ${desktop} 1s;
  }
`;

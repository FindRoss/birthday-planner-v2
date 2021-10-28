import styled from 'styled-components';
import { devices } from '../../devices';


export const Section = styled.section`
  padding-top: var(--size-900);
  padding-bottom: var(--size-900);
  background: var(--color-light);
  position: relative;
  
  /* body has flex column so this area can be full height */
  flex: 1;
`;

export const CardsLayout = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  grid-row-gap: var(--size-300);
  text-color: inherit; 

  @media ${devices.fromTablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: var(--size-600);
  } 
`;

export const DateCard = styled.div`
  padding: var(--size-600) var(--size-500);
  background: #fff;
  border-radius: var(--size-300);
  display: grid; 
  grid-template-columns: 100px auto; 
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:focus, 
  &:hover { 
    border-color: var(--color-primary);
  }
`;

export const CardDate = styled.div`
  display: flex; 
  width: 75px;
  height: 75px;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  border: 4px solid var(--color-light);
  border-radius: 50%;
  margin: 0 auto;
`;

export const CardDateMonth = styled.div`
  font-weight: bold;
  font-size: var(--size-300);
`;

export const CardInfo = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: start;
`;

export const CardType = styled.div`
  color: var(--color-muted);
  text-transform: uppercase;
  font-weight: 200;
  font-size: var(--size-300);
`;

export const CardName = styled.div`
  font-size: var(--size-600);
`;

export const HeadingBox = styled.div`
  margin-bottom: var(--size-600);
  padding-bottom: var(--size-600);
  border-bottom: 1px solid #dfdfdf;
  position: relative; 

  &:after {
    content: "";
    width: 55px;
    height: 3px;
    background: var(--color-secondary);
    color: var(--color-secondary);
    display: block;
    position: absolute;
    bottom: -0px;
  }
`;

export const HeadingParagraph = styled.p`
  @media ${devices.fromTablet} {
    width: 65%;
  }
`;


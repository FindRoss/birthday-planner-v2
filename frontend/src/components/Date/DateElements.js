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

export const Heading = styled.div`
  margin-top: var(--size-400);
`;

export const DateCard = styled.div`
  font-size: var(--size-600);
`;


export const Body = styled.div`
  padding: var(--size-600) var(--size-500);
  background: #fff;
  border-radius: var(--size-300);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
`;



export const DateType = styled.div`
  color: var(--color-muted);
  text-transform: uppercase;
  font-weight: 200;
  font-size: var(--size-300);
`;

export const Description = styled.div`
  margin-top: var(--size-900); 
  font-size: var(--size-500); 
`;

export const ButtonBar = styled.div`
  margin-top: var(--size-900);
  display: flex;
  justify-content: center; 

  & a {
    margin: 0 var(--size-200);
  }


  @media ${devices.fromTablet} {
    justify-content: end;
  }
 
`;
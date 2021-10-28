import styled from 'styled-components';
// import { devices } from '../../devices';

export const Section = styled.section`
  padding-top: var(--size-900);
  padding-bottom: var(--size-900);
  background: var(--color-light);
  position: relative;
  
  /* body has flex column so this area can be full height */
  flex: 1;
`;

export const HeadingLayout = styled.div`
  display: flex; 
  margin-bottom: var(--size-300);
  width: 100%;

  & .headingLayout__box {
    flex: 1;
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const DateCard = styled.div`
  padding: var(--size-600) var(--size-500);
  background: #fff;
  border-radius: var(--size-300);
  font-size: var(--size-600);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  text-align: center;
  margin: 0 auto;
  

  @media (max-width: 767px) {
    margin-bottom: var(--size-600);
    width: 100%;
  }
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
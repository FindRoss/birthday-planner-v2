import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const Center = styled.div`
  display: flex;
  height: 100%; 
  justify-content: center; 
  align-items: center;
`;

export const Rotate = styled.div`
  animation: ${rotate} 2s infinite linear;
`;


export const Icon = styled.div`
  font-size: var(--size-900);
`;
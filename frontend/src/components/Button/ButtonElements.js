
import styled from 'styled-components';

export const ButtonStyle = styled.div`
  display: flex; 
  justify-content: end;
  padding-top: var(--size-400);

  & button {
    color: #ffffff;
    display: block;
    padding: var(--size-200) var(--size-400);
    text-transform: uppercase; 
    background: var(--color-secondary);
    border-radius: var(--radius-sm);
    border: none; 
    font-weight: bold;
    cursor: pointer;  
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  }
`;

import styled from 'styled-components';
import { devices } from '../../devices';

export const FormStyle = styled.form`
  border-radius: var(--size-300);
  padding: var(--size-800) var(--size-600); 
  background: #fff;
  transform: translateY(75px);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  font-family: Arial;
`;

export const FormLayout = styled.div`
  @media ${devices.fromTablet} {
    display: flex; 
    flex-wrap: wrap;
    // grid-template-columns: 1fr 1fr; 
    // grid-column-gap: var(--size-500);
  }
`;

export const FormColHalf = styled.div`
  @media ${devices.fromTablet} {
      flex: 50%;  
    }
    max-width: 100%;
`;

export const FormColFull = styled.div`
  flex: 100%;
  max-width: 100%;
`;

export const FormRow = styled.div`
  margin-bottom: var(--size-200);
  width: 100%;
  padding: 0 6px;
`;

export const InputLabel = styled.label`
  font-size: var(--size-200); 
  font-weight: bold;
  color: var(--color-muted);
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-input-border);
  padding: var(--size-200) var(--size-200);

`;

// same as above except max-width
export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-input-border); 
  padding: var(--size-200) var(--size-200);
  max-width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  border-radius: var(--size-100);
  background: var(--color-light); 
  border: 1px solid #ccc; 
  font-family: Arial; 
  padding: var(--size-200) var(--size-200);
  height: 50px;
`;

export const Message = styled.div`
  border-radius: var(--size-300);
  padding: var(--size-300) var(--size-100);
  background: #fff;
  position: absolute;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  left: 1rem;
  right: 1rem;
  top: 0.7rem;
`;


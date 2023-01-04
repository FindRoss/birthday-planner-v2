import styled from 'styled-components';
import { devices } from '../../devices';

export const Section = styled.section`
  padding-top: var(--size-400);
  padding-bottom: var(--size-400);
  position: relative;
  
  /* body has flex column so this area can be full height */
  flex: 1;
`;


export const FormWrapper = styled.div`
  margin-top: var(--size-600);
`;

export const FormStyle = styled.form`
  border-radius: var(--radius-md);
  padding: var(--size-800) var(--size-600); 
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  font-family: Arial;
  width: 100%;
`;

export const FormLayout = styled.div`
  @media ${devices.fromTablet} {
    display: flex; 
    flex-wrap: wrap;
  }
`;

export const FormColThird = styled.div`
  @media ${devices.fromTablet} {
      flex: 33.33%;  
    }
    max-width: 100%;
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
  margin-top: var(--size-600);
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
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-input-border); 
  padding: var(--size-200) var(--size-200);
  max-width: 100%;
`;




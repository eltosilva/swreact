import styled from 'styled-components';
import { blueR2D2, grayBB8, orangeBB8 } from '../../shared/colors';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  * {
    font-size: 2rem;
    border-radius: 0.5rem;
    width: 100%;
  }

  label {
    color: ${blueR2D2}
  }
`;



export const Buttton = styled.button`
  background-color: ${orangeBB8};
  border: none;
  color: #fff;
  font-weight: 600;

  &:hover{
    background-color: ${grayBB8};
    cursor: pointer;
  }

  &:active{
    background-color: ${blueR2D2}
  }
`;
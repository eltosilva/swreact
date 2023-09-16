import styled from 'styled-components';
import { blueR2D2, grayBB8, orangeBB8 } from '../../../shared/colors';

export const Form = styled.form`
  display: flex;
  gap: 1rem;
`

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 30rem;
}
`

export const Button = styled.button`
font-size: 1.5rem;
width: 12rem;
border-radius: 1rem;
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
`
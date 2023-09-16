import styled from 'styled-components';
import { orangeBB8 } from '../colors';

export const CardContainer = styled.div`
  padding: 1rem;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 2px 3px 10px 4px #6072c5;
    border-radius: 1rem;
    background-color: #ffffff58;
    padding: 0.5rem
  }

  img {
    width: 100%;
    max-width: 15vw;
    border-radius: 10%;
  }

  figcaption {
    background-color: ${orangeBB8};
    color: #fff;
    height: 3rem;
    width: 100%;
    padding: 0 0.5rem;
    text-align: center;
    line-height: 3rem;
    border-radius: 0.5rem;
  }  
`;
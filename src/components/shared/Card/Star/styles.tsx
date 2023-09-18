import styled from 'styled-components';
import { blueR2D2, orangeBB8, yellowSW } from '../../colors';

export const Svg = styled.svg<IPropsSvg>`
  width: 2rem;
  height: 2rem;
  stroke: ${blueR2D2};
  position: absolute;
  right: 1.5rem;
  top: 1rem;

  &:hover {
    stroke: ${orangeBB8}
  }

  * {
    fill: ${props => props.isFavorite ? yellowSW : 'transparent'};
    stroke-width: 1.5px;
    stroke: current-color;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

interface IPropsSvg {
  isFavorite: boolean
}
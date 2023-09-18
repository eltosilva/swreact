import { useState } from 'react';
import { Svg } from './styles';

export function Star({ isFavorite, changeFavorite }: IPropsStar) {

  const [render, setRender] = useState(isFavorite)

  return (
    <Svg isFavorite={render} onClick={() => changeFavorite(() => setRender(!render))} >
      <path d="M27.2,14.2c0.2-0.2,0.3-0.5,0.2-0.7c-0.1-0.3-0.3-0.5-0.6-0.5l-5.4-0.7c-0.3-0.2-0.6-0.4-0.8-0.7
                        l-2.4-4.9c-0.1-0.3-0.3-0.4-0.6-0.4c-0.3,0-0.5,0.2-0.6,0.4l-2.5,4.9c-0.2,0.4-0.5,0.6-0.9,0.6L8.3,13c-0.3,0-0.6,0.2-0.6,0.5
                        c-0.1,0.3,0,0.6,0.2,0.7l3.8,3.7c0.3,0.3,0.4,0.7,0.3,1l-0.9,5.3c0,0.3,0.1,0.5,0.3,0.7c0.1,0.1,0.3,0.1,0.4,0.1l0,0
                        c0.1,0,0.2,0,0.3-0.1l0.4-0.2l4.4-2.3c0.2-0.1,0.3-0.1,0.5-0.1c0.2,0,0.4,0,0.5,0.1l4.8,2.5C22.8,25,22.9,25,23,25
                        c0.1,0,0.3,0,0.4-0.1c0.2-0.2,0.3-0.5,0.3-0.7l-0.9-5.3c-0.1-0.4,0.1-0.8,0.3-1L27.2,14.2z"
      >
      </path>
      <line x1="11.1" y1="8" x2="10.4" y2="7.1"></line>
      <line x1="23.9" y1="8" x2="24.5" y2="7.1"></line>
      <line x1="7.2" y1="20.1" x2="6.2" y2="20.4"></line>
      <line x1="27.8" y1="20.1" x2="28.9" y2="20.4"></line>
      <line x1="17.6" y1="27.6" x2="17.6" y2="28.7"></line>
    </Svg>
  )
}

interface IPropsStar {
  isFavorite: boolean;
  changeFavorite: (fn: Function) => void;
}
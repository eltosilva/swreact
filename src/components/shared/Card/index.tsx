import { Star } from './Star';
import { CardContainer } from './styles';

export function Card({ title, src, isFavorite, changeFavorite }: ICard) {
  return (
    <CardContainer>
      <Star isFavorite={isFavorite} changeFavorite={changeFavorite} />
      <figure>
        <img src={src} alt='' />
        <figcaption>{title}</figcaption>
      </figure>
    </CardContainer>
  )
}

type ChangeFavorite = (fn: Function) => void;

interface ICard {
  title: string;
  src: string;
  isFavorite: boolean;
  changeFavorite: ChangeFavorite
}
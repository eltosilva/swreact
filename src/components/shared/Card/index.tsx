import { CardContainer } from './styles';

export function Card({ title, src, isFavorite, changeFavorite }: ICard) {
  return (
    <CardContainer>
      <figure>
        <img src={src} alt='' />
        <figcaption>{title}</figcaption>
      </figure>
    </CardContainer>
  )
}

type ChangeFavorite = () => void;

interface ICard {
  title: string;
  src: string;
  isFavorite: boolean;
  changeFavorite: ChangeFavorite
}
import { useEffect, useState } from 'react';
import { Panel } from '../../shared/Panel';
import { ICharacter } from '../../shared/dto/character.interface';
import { apiService } from '../../../services/api.service';
import { Card } from '../../shared/Card';

export function Favorite() {

  const [characters, setCharacters] = useState([] as ICharacter[])

  useEffect(() => {
    apiService.get<ICharacter[]>('characters/favorites')
      .then(response => setCharacters(response.data))
      .catch(err => console.error(err))
  }, [])

  function fnChangeFavorite(character: ICharacter, fn: Function) {
    const isFavorite = !character.isFavorite;

    apiService.put(`/characters/${character.id}`, { isFavorite })
      .then(response => {
        character.isFavorite = isFavorite;
        fn();
      })
      .catch(err => console.error(err))

    setCharacters(characters?.slice(0));
  }
  return (
    <Panel>
      {
        characters?.map(
          character => <Card
            key={character.id}
            src={character.image}
            title={character.name}
            changeFavorite={(fn) => fnChangeFavorite(character, fn)}
            isFavorite={character.isFavorite}
          />
        )
      }
    </Panel>
  )
}
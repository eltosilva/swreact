import { useState } from 'react';
import { Panel } from '../../shared/Panel';
import { FormSearch } from './FormSearch';
import { HomeContainer } from './styles';
import { ICharacter } from '../../shared/dto/character';
import { apiService } from '../../../services/api';
import { Card } from '../../shared/Card';

export function Home() {

  const [characters, setCharacters] = useState<ICharacter[]>()

  async function fnSearchCharacters(name: string) {
    const charactersFound = await apiService.get<ICharacter[]>(`characters?name=${name}`)
    setCharacters(charactersFound.data);
  }

  return (
    <HomeContainer >
      <FormSearch fnOnSubmit={fnSearchCharacters} />
      <Panel>
        {characters?.map(
          character => <Card key={character.id} src={character.image} title={character.name} changeFavorite={() => console.log('')} isFavorite={true} />
        )}
        {characters?.map(
          character => <Card key={character.id} src={character.image} title={character.name} changeFavorite={() => console.log('')} isFavorite={true} />
        )}
        {characters?.map(
          character => <Card key={character.id} src={character.image} title={character.name} changeFavorite={() => console.log('')} isFavorite={true} />
        )}
        {characters?.map(
          character => <Card key={character.id} src={character.image} title={character.name} changeFavorite={() => console.log('')} isFavorite={true} />
        )}
      </Panel>
    </HomeContainer>
  )
}

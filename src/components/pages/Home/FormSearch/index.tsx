import { FormEvent } from 'react';
import { Button, Form, Input } from './styles';

export function FormSearch({ fnOnSubmit }: IPropsFormSearch) {

  function fnSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const characterValue = formData.get('character')?.toString() ?? '';

    fnOnSubmit(characterValue)
  }

  return (
    <Form onSubmit={fnSubmit}>
      <Input type='search' name='character' />
      <Button>Pesquisar</Button>
    </Form>
  )
}

interface IPropsFormSearch {
  fnOnSubmit: (value: string) => void;
}


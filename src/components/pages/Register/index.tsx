import { FormEvent } from 'react';
import { Button } from '../Home/FormSearch/styles';
import { Form, RegisterContainer } from './styles';
import { apiService } from '../../../services/api.service';
import { IUser, IUserCreate } from '../../shared/dto/user.interface';
import { useNavigate } from 'react-router-dom';

export function Register() {

  const navigate = useNavigate();

  function fnSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const body: IUserCreate = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      login: formData.get('login')?.toString() ?? '',
      password: formData.get('password')?.toString() ?? ''
    }

    apiService.post<IUser>('/users', body)
      .then(response => navigate('/login'))
      .catch(error => console.error(error));

  }

  return (
    <RegisterContainer>
      <Form onSubmit={fnSubmit}>
        <div>
          <label htmlFor='name' >Nome</label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='login'>Login</label>
          <input type='text' name='login' id='login' />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type='password' name='password' id='password' />
        </div>
        <Button>Salvar</Button>
      </Form>
    </RegisterContainer>
  )
}
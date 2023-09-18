import { Link, useNavigate } from 'react-router-dom';
import { Box, Form, LoginContainer } from './styles';
import { Button } from '../Home/FormSearch/styles';
import { FormEvent, useContext } from 'react';
import { apiService } from '../../../services/api.service';
import { ContextAuth } from '../../struture/AuthProvider';

export function Login() {

  const { saveToken } = useContext(ContextAuth);
  const navigate = useNavigate();

  function fnSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement)

    apiService
      .post<IToken>('/auth', { email: formData.get('email'), password: formData.get('password') })
      .then(response => {
        saveToken(response.data)
        navigate('/favorites')
      })
      .catch(erro => console.error(erro))
  }
  return (
    <LoginContainer>
      <Box>
        <Form onSubmit={fnSubmit}>
          <input type='text' name='email' placeholder='E-mail' />
          <input type='password' name='password' placeholder='Senha' />
          <Button>Entrar</Button>
        </Form>
        <p>Se ainda não tem um cadastro, <Link to='/register' >click aqui</Link>.</p>
      </Box>
    </LoginContainer>
  )
}

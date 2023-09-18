import { useContext } from 'react';
import { LogoutContainer } from './styles';
import { ContextAuth } from '../../struture/AuthProvider';
import { useNavigate } from 'react-router-dom';

export function Logout() {

  const { removeToken } = useContext(ContextAuth);
  const navigate = useNavigate();

  function fnLogout() {
    removeToken();
    navigate('/')
  }

  return <LogoutContainer onClick={fnLogout}>Logout</LogoutContainer>
}
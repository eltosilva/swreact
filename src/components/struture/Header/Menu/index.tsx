import { NavLink } from 'react-router-dom';
import { LoginBox, MenuContainer, MenuBox } from './styles';
import { useContext } from 'react';
import { ContextAuth } from '../../AuthProvider';
import { Logout } from '../../../shared/Logout';

export function Menu() {

  const { authenticated } = useContext(ContextAuth);

  return (
    <MenuContainer>
      <MenuBox>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/favorites'>Favoritos</NavLink></li>
      </MenuBox>
      <LoginBox>{authenticated ? <Logout /> : <NavLink to='/login'>Login</NavLink>}</LoginBox>
    </MenuContainer>
  )
}
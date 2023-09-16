import { NavLink } from 'react-router-dom';
import { LoginBox, MenuContainer, MenuBox } from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <MenuBox>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/favorites'>Favoritos</NavLink></li>
      </MenuBox>
      <LoginBox><NavLink to='/login'>Login</NavLink></LoginBox>
    </MenuContainer>
  )
}
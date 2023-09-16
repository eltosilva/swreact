import { Menu } from './Menu';
import { StarWarsLogo } from './StarWarsLogo';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <StarWarsLogo />
      <Menu />
    </HeaderContainer>
  )
}
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './styles';
import { Home } from '../../pages/Home';
import { Favorite } from '../../pages/Favorite';
import { Register } from '../../pages/Register';
import { Login } from '../../pages/Login';
import { Character } from '../../pages/Character';


export function Main() {
  return (
    <MainContainer>
      <Routes>
        <Route Component={Home} path='/' index={true} />
        <Route Component={Favorite} path='favorites' />
        <Route Component={Register} path='register' />
        <Route Component={Login} path='login' />
        <Route Component={Character} path='character/:id' />
      </Routes>
    </MainContainer>
  )
}
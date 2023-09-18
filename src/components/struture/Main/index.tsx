import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './styles';
import { Home } from '../../pages/Home';
import { Favorite } from '../../pages/Favorite';
import { Register } from '../../pages/Register';
import { Login } from '../../pages/Login';
import { Character } from '../../pages/Character';
import { ProtectedRoute } from '../ProtectedRoute';

export function Main() {

  return (
    <MainContainer>
      <Routes>
        <Route Component={Home} path='/' index={true} />
        <Route path='favorites' element={<ProtectedRoute />}>
          <Route path='favorite' Component={Favorite} />
        </Route>
        <Route Component={Register} path='register' />
        <Route Component={Login} path='login' />
        <Route Component={Character} path='character/:id' />
      </Routes>
    </MainContainer>
  )
}

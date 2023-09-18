import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { BackrgroundImage } from './components/struture/BackgroundImage';
import { Header } from './components/struture/Header';
import { Main } from './components/struture/Main';
import { AuthProvider } from './components/struture/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <BackrgroundImage />
        <Header />
        <Main />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

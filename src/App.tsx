import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { BackrgroundImage } from './components/struture/BackgroundImage';
import { Header } from './components/struture/Header';
import { Main } from './components/struture/Main';

function App() {
  return (
    <BrowserRouter>
      <BackrgroundImage />
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

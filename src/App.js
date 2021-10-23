import './App.scss';
import { AppContextProvider } from './context/ProvideAppContext'
import ListCards from './views/ListCards';

function App() {
  return (
    <AppContextProvider>
      <ListCards/>
    </AppContextProvider>
  );
}

export default App;

import './App.scss';
import { AppContextProvider } from './context/ProvideAppContext'
import CardsPage from './views/ListCards/CardsPage'

function App() {
  return (
    <AppContextProvider>
      <CardsPage/>
    </AppContextProvider>
  );
}

export default App;

import './App.scss';
import Main from './components/goods/main'
import Footer from './components/goods/footer'
import Header from './components/goods/header'
import { useAppState } from './hooks/appHook';

function App() {
  const {AppState} = useAppState();

  return (
      <div className={`wrapper ${AppState.theme ? 'theme-light' : 'theme-dark'} `}>
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;

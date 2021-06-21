import './App.css';
import {NavBar} from './components/navbarComponent/index.jsx';
import {ItemListContainer} from './components/itemListContainerComponent/index.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./images/logoNavBar.jpg"  height="150" width="150" alt="logo" />
      </header>
      <NavBar/>
      <ItemListContainer message="Proximamente Productos"/>
    </div>
  );
}

export default App;

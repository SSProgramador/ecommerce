import './App.css';
import {NavBar} from './components/navbar/index.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./images/logoNavBar.jpg"  height="150" width="150" alt="logo" />
      </header>
      <NavBar/>
      <h2>Proximamente!!</h2>
    </div>
  );
}

export default App;

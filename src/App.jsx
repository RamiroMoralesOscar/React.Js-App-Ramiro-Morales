import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer style={{textAlign:"center"}}/>
    </div>
    </>  );
}

export default App;
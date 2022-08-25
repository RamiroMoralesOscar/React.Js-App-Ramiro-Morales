import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import TarjetaProducto from "./components/Tarjeta";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer />
        <TarjetaProducto />
      </div>
    </>
  );
}

export default App;

import Card from "./components/card";
import Navbar from "./components/navbar";
import Pessoa from "./components/Pessoa";
import './App.css';
import Bloco from "./components/bloco";
import Rodape from "./components/rodape";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="duplo">
        <Pessoa/>
        <Bloco/>
        <Rodape/>
        <Card/>
      </div>
    </div>
  );
}

export default App;

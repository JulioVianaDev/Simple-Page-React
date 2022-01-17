import Card from "./components/card";
import Navbar from "./components/navbar";
import Pessoa from "./components/Pessoa";
import './App.css';
import Bloco from "./components/bloco";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="duplo">
        <Pessoa/>
        <Bloco/>
      </div>
    </div>
  );
}

export default App;

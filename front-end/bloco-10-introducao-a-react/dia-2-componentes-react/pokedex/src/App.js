import "./App.css"
import pokemons from "./data" //recebe diretamente 
import Pokedex from "./components/Pokedex";
function App() {
  return (
  
  <div>
    <Pokedex pokemons={pokemons}/>
  </div>    
   
  )
}

export default App;

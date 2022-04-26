import Pokecard from "./Pokecard.js" ;


/** Pokedex accepts an array of pokemon details and returns a JSX div of
 * each pokemon in the array . */

function Pokedex({pokemons, exp, isWinner}) {
return (
  <div>
    <h1>Pokedex</h1>
    <h4>Total experience: {exp} </h4>
    {
    pokemons.map(p => <Pokecard id = {p.id} name = {p.name}
      type = {p.type} base_experience = {p.base_experience} />)
    }
    <h3>{isWinner? "THIS HAND WINS!":""}</h3>
  </div>
)}

export default Pokedex;

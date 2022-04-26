import Pokedex from "./Pokedex.js" ;

/** Shuffles array */
function getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

/** Pokegame accepts a list of pokemons and randomly
 * assign them into two hands of 4 cards each,
 * and determines the winner . */

function Pokegame({pokemons}) {
  const shuffledPokemons = getRandomSubarray(pokemons,8)
const player1 =
{
  hand : shuffledPokemons.slice(0,4),
  exp : 0,
  isWinner : false,
};
const player2 =
{
  hand : shuffledPokemons.slice(4,8),
  exp : 0,
  isWinner : false,
}

player1.hand.map(p=> player1.exp += p.base_experience)
player2.hand.map(p=> player2.exp += p.base_experience)
player1.exp>player2.exp? player1.isWinner = true: player2.isWinner = true

return (
  <div>
    <Pokedex pokemons = {player1.hand} exp = {player1.exp} isWinner = {player1.isWinner} />
    <Pokedex pokemons = {player2.hand} exp = {player2.exp} isWinner = {player2.isWinner} />
  </div>
)}

export default Pokegame;

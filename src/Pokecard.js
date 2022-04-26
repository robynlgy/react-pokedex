import Card from 'react-bootstrap/Card';

/** Pokecard accepts id, name, type, base_experience
 *  and returns JSX div of pokecard.  */

function Pokecard({id, name, type, base_experience}){

const POKEMON_API_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

return (

  <Card className="text-white bg-secondary" style={{ width: '10rem', display: 'inline-block' }}>
  <Card.Img variant="top" src={`${POKEMON_API_URL}/${id}.png`} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    {type} <br/>
    EXP: {base_experience}
    </Card.Text>
  </Card.Body>
</Card>

)}

export default Pokecard

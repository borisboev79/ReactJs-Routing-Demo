import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  const name = "unknown";

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch((err) => navigate('/404') )
      ;
  }, [id]);
  return (
    <>
      <h3>{character.name}</h3>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        recusandae eveniet, ab exercitationem laudantium quibusdam non provident
        perspiciatis vero repudiandae quasi, nisi aliquid ut cupiditate iure.
        Sunt rerum voluptate iusto?
      </p>
    </>
  );
};

export default CharacterDetails;

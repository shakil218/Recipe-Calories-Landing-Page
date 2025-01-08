import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";
import PropTypes from 'prop-types';

const Recipe = ({handleCook}) => {

  const [recipes , setRecipes] = useState([])

  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  return (
    <>
    <div className="grid md:grid-cols-2 md:w-2/3">
      {
        recipes.map(recipe => <Item key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Item>)
      }
    </div>
    </>
  );
};

Recipe.propTypes = {
  handleCook:PropTypes.func
}

export default Recipe;
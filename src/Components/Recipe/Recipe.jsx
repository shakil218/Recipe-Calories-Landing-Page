import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";


const Recipe = () => {

  const [recipes , setRecipes] = useState([])

  useEffect(()=>{
    fetch("fakeData.json")
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  return (
    <>
    <div className="grid md:grid-cols-2 w-2/3">
      {
        recipes.map(recipe => <Item key={recipe.recipe_id} recipe={recipe}></Item>)
      }
    </div>
    </>
  );
};

export default Recipe;
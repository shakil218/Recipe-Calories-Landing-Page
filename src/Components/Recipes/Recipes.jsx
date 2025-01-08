import { useState } from "react";
import Cooklist from "../Cooklist/Cooklist";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [cookLists, setCookLists] = useState([]);

  const handleCook = (recipe) => {
    // console.log(recipe);
    const newCookLists = [...cookLists, recipe];
    setCookLists(newCookLists);
  };

  return (
    <>
      <div className="flex justify-center text-center my-12">
        <div>
          <h1 className="mb-5 text-4xl font-extrabold">Our Recipes</h1>
          <p>
            Our recipes bring flavors from around the world to your kitchen.
            <br /> From quick, simple meals to indulgent treats, find something
            for every craving and occasion!
          </p>
        </div>
      </div>
      <div className="md:flex">
        <Recipe handleCook={handleCook}></Recipe>
        <Cooklist cookLists={cookLists}></Cooklist>
      </div>
    </>
  );
};

export default Recipes;

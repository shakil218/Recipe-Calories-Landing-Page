import PropTypes from 'prop-types';
import { LuClock3 } from "react-icons/lu";
import { BsFire } from "react-icons/bs";

const Item = ({ recipe , handleCook}) => {
  const {
    recipe_image,
    recipe_name,
    description,
    preparing_time,
    calories,
    ingredients,
  } = recipe;

  return (
    <div className="flex my-5 md:mr-5 border border-gray-200 rounded-xl">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{description}</p>
          <hr />
          <div className="my-3">
            <h2 className="text-xl">Ingredients: {ingredients.length}</h2>
            <div>
              <ul className="ml-5">
                {ingredients.map((ingredient, index) => (
                  <li className="list-disc ml-3" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex my-3">
            <p className="flex items-center content-center gap-3">
              <LuClock3 />
              {preparing_time} minutes
            </p>
            <p className="flex items-center content-center gap-3">
              <BsFire />
              {calories} calories
            </p>
          </div>

          <div className="card-actions">
            <button className="btn bg-[#0be58a] rounded-full border-none hover:bg-[#0be58a]" onClick={()=>handleCook(recipe)}>
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  recipe:PropTypes.object,
  handleCook:PropTypes.func
}

export default Item;

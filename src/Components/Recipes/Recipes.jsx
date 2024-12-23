import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  
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
      <div className="flex">
        <Recipe></Recipe>
      </div>
    </>
  );
};

export default Recipes;

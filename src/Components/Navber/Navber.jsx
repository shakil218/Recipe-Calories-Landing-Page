import { VscAccount } from "react-icons/vsc";

const Navber = () => {
  return (
    <div className="flex justify-between items-center my-10">
      <h1 className="text-2xl font-bold">Recipe Calories</h1>
      <div className="flex gap-5">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
      </div>
      <div className="flex gap-5">
        <label className="input input-bordered flex items-center gap-2 rounded-full">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div className=" flex justify-center items-center w-12 h-12 bg-[#0be58a] rounded-full">
          <VscAccount />
        </div>
      </div>
    </div>
  );
};

export default Navber;

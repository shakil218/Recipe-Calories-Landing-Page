import Banner from "./Components/banner/Banner";
import Navber from "./Components/Navber/Navber";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navber></Navber>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;

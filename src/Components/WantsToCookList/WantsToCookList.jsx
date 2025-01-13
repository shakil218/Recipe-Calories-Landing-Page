import PropTypes from "prop-types";

const WantsToCookList = ({ cookLists , handlePreparedCookList }) => {
  
  return (
    <div>
      <div className="m-7">
        <h1 className="text-xl font-bold text-center mb-3">Want to cook: </h1>
        <hr />
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cookLists.map((cookList , index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cookList.recipe_name}</td>
                <td>{cookList.preparing_time} minutes</td>
                <td>{cookList.calories} calories</td>
                <td>
                  <button onClick={()=>handlePreparedCookList(cookList , cookList.preparing_time , cookList.calories)} className="btn bg-[#0be58a] rounded-full border-none hover:bg-[#0be58a]">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantsToCookList.propTypes = {
  cookLists: PropTypes.array,
  handlePreparedCookList: PropTypes.func
};

export default WantsToCookList;

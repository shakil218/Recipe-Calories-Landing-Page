import PropTypes from "prop-types";

const PreparedCookList = ({ preparedCookList }) => {
  return (
    <div>
      <div className="m-7">
        <h1 className="text-xl font-bold text-center mb-3">
          Currently cooking:{" "}
        </h1>
        <hr />
      </div>
      <div>
        <table className=" table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedCookList.map((cookList) => (
              <tr key={cookList.idx}>
                <td>{cookList.recipe_name}</td>
                <td>{cookList.preparing_time} minutes</td>
                <td>{cookList.calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PreparedCookList.propTypes = {
  preparedCookList: PropTypes.array,
};

export default PreparedCookList;

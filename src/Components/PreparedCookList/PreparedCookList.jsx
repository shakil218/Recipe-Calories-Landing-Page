

const PreparedCookList = () => {
  return (
    <div>
      <div className="m-7">
        <h1 className="text-xl font-bold text-center mb-3">Currently cooking: </h1>
        <hr />
      </div>
      <div>
        <table className=" table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td>400 calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreparedCookList;
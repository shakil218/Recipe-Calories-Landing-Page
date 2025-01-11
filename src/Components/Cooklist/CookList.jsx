import { useState } from "react";
import WantsToCookList from "../WantsToCookList/WantsToCookList";
import PropTypes from "prop-types";
import PreparedCookList from "../PreparedCookList/PreparedCookList";

const Cooklist = ({ cookLists }) => {
  const [preparedCookList, setPreparedCookList] = useState([]);
  const [times, setTimes] = useState(0);
  const [calories, setCalories] = useState(0);

  const handlePreparedCookList = (cookList, time, Calories) => {
    const newPreparedCookList = [...preparedCookList, cookList];
    setPreparedCookList(newPreparedCookList);
    
    const totalTimes = parseFloat(times) + parseFloat(time)
    setTimes(totalTimes)
    
    const totalCalories = parseFloat(calories) + parseFloat(Calories)
    setCalories(totalCalories)
  };

  return (
    <div className="md:w-1/3 my-5  border border-gray-200 rounded-xl">
      <div>
        <WantsToCookList
          cookLists={cookLists}
          handlePreparedCookList={handlePreparedCookList}
        ></WantsToCookList>
      </div>
      <div>
        <PreparedCookList
          preparedCookList={preparedCookList}
        ></PreparedCookList>
      </div>
      <div>
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-end items-end font-bold">
              <td>
                Total Time = <br />
                {times} minutes
              </td>
              <td>
                Total Calories = <br />
                {calories} calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooklist.propTypes = {
  cookLists: PropTypes.array,
};
export default Cooklist;

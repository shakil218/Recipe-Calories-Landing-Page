import { useState } from "react";
import WantsToCookList from "../WantsToCookList/WantsToCookList";
import PropTypes from "prop-types";
import PreparedCookList from "../PreparedCookList/PreparedCookList";

const Cooklist = ({ cookLists }) => {
  const [preparedCookList, setPreparedCookList] = useState([]);

  const handlePreparedCookList = (cookList) => {
    const newPreparedCookList = [...preparedCookList, cookList];
    setPreparedCookList(newPreparedCookList);
    // console.log(preparedCookList);
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
    </div>
  );
};

Cooklist.propTypes = {
  cookLists: PropTypes.array,
};
export default Cooklist;

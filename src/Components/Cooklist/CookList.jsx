import PreparedCookList from "../PreparedCookList/PreparedCookList";
import WantsToCookList from "../WantsToCookList/WantsToCookList";

const Cooklist = () => {
  return (
    <div className="w-1/3 my-5 ml-5 border border-gray-200 rounded-xl">
      <div>
        <WantsToCookList></WantsToCookList>
      </div>
      <div>
        <PreparedCookList></PreparedCookList>
        <div>
          <table className="table ">
            <tbody>
              <tr className="flex justify-end items-end ">
                <td>Total Time = <br />
                  45 minutes</td>
                <td>Total Calories = <br />
                  1050 calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cooklist;

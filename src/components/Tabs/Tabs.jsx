import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../../store/slices/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  const tabs = ["Images", "Videos", "GIFS"];

  const handleTabClick = (tab) => {
    dispatch(setTab(tab));
  };

  return (
    <div className="mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`mr-4 mb-4 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 ${
            activeTab === tab ? "border-b-4 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default Tabs;

import Counter from "./components/Counter";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Search from "./components/Search";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <div className="root">
      {/* <Counter /> */}
      <div className="min-h-screen text-white w-full bg-gray-950 p-12">
        <Search />
        <Tabs />
        <ImageGrid />
      </div>
    </div>
  );
}

export default App;

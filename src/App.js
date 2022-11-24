import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./App.css";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import TempratureAndDetails from "./components/TempratureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <TopButtons />
      <Input />

      <TimeAndLocation />
      <TempratureAndDetails />
      <Forecast title="hourely forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;

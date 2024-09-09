import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import { Outlet } from "react-router-dom";

function App() {
  const [active, setActive] = useState("home");

  const renderComponent = () => {
    switch (active){
      case "home":
        return <Home/>;
      case "exercises":
        return <Exercises/>;
      default:
        return <Home/>;
    }
  };

  const handleOnClick = ()=> {
    setSelectedTab("Exercises");
  }

  return (
    <>
      <Navbar setActive={setActive}/>
      <Outlet/>
      {/* {renderComponent()} */}
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
import ChangeBackground from "./components/ChangeBackground";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/bg" element={<ChangeBackground />}></Route>
      </Routes>
    </>
  );
}

export default App;

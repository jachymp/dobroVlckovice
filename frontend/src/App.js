import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import './App.css';
import ActualEvent from "./components/ActualEvent";
import About from "./components/About";
import AnotherEvents from "./components/AnotherEvents";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Slideshow/>
        <ActualEvent/>
      <About/>
        <AnotherEvents/>
    </BrowserRouter>
  );
}

export default App;

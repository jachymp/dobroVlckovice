import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import './App.css';
import ActualEvent from "./components/ActualEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Slideshow/>
        <ActualEvent/>
    </BrowserRouter>
  );
}

export default App;

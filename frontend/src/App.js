import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Slideshow/>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import './App.css';
import ActualEvent from "./components/ActualEvent";
import About from "./components/About";
import AnotherEvents from "./components/AnotherEvents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Slideshow/>
        <ActualEvent/>
      <About/>
        <AnotherEvents/>
        <Contact/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

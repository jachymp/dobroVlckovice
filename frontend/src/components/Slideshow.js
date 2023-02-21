import './slideshow.css';
import {useEffect, useState} from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// 30s
const delay = 30000;

const Slideshow = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length -1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {};
        }, [index]);
    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {colors.map((backgroundColor, index) => (
                    <div className="slide" key={index} style={{backgroundColor}}></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;

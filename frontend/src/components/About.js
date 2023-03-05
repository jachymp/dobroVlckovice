import './about.css';

const About = () => {

    return (
        <div className="about-container">
            <div className="about-img">
                <div style={{backgroundColor: "blue"}}></div>
                <div style={{backgroundColor: "red"}}></div>
                <div style={{backgroundColor: "green"}}></div>
            </div>
            <div className="about-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper interdum tellus a consectetur. Vivamus ornare diam ac turpis consectetur consectetur. Proin placerat sagittis massa vel luctus. Aenean ornare pretium justo, at commodo odio condimentum consectetur. Pellentesque tincidunt risus neque, non tempor felis iaculis id. Donec a vestibulum justo. Aenean volutpat ullamcorper efficitur.
                    Curabitur purus est, tempus id porta ut, commodo id felis. Nam blandit dictum condimentum. Etiam vulputate nunc a dolor sodales congue. Donec finibus tortor nunc, id scelerisque lorem molestie iaculis. Nunc in orci nec sem lacinia posuere non sit amet neque. Morbi convallis, dui et efficitur pellentesque, elit elit pulvinar ipsum, cursus commodo velit turpis vitae ligula.
                </p>
            </div>
        </div>
    )
}

export default About;
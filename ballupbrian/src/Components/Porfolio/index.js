import "./portfolio.css";
import img from "../../Images/IMG_9375.jpg";

function Portfolio() {

    return (
        <div className="Porfolio-container">
            <h2>ABOUT ME</h2>
            <div className="main-container">
                <section className="inner-Container">
                    <h3 className="title">Hello! My name is Brian</h3>
                    <div className="img-container">
                        <img src={img} alt="portfolio-img" className="portfolio-img" />
                    </div>
                </section>
                <section className="inner-Container">
                    <h3>I go to brooklyn college</h3>
                    <h4> random text blah blah blah blahblahblabhlabhlabhlabhlab
                        avhlabahblhalh
                    </h4>
                </section>
            </div>
        </div>
    );
}

export default Portfolio;
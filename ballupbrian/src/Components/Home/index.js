import img from "../../Images/IMG_1112.jpg";
import img2 from "../../Images/IMG_1312.jpg";
import img3 from "../../Images/IMG_9111.jpg";
import img4 from "../../Images/IMG_9375.jpg";

import "./home.css";

function Home() {
    const images = [img, img2, img3, img4, img4, img2];

    return (
        <div className="home-container">
            <h2>Current</h2>
            <div className="image-container">
                {
                    images.map((image) => (
                        <div className="image-card">
                            <img src={image} className="image" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
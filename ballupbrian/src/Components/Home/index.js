import img from "../../Images/IMG_1112.jpg";
import img2 from "../../Images/IMG_1312.jpg";
import img3 from "../../Images/IMG_9111.jpg";
import img4 from "../../Images/IMG_9375.jpg";
import instagram from "../../Images/instagram.png";
import tiktok from "../../Images/tiktok-icon.png";
import linkedln from "../../Images/linkedln.png";
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
            <section className="social-media">
                <a href="https://www.instagram.com/ballupbrian/"
                    target="_blank"
                >
                    <img src={instagram} alt="Instragram logo" className="socials ig" />
                </a>
                <a href="https://www.tiktok.com/@ballupbrian"
                    target="_blank"
                >
                    <img src={tiktok} alt="tiktok logo" className="socials" />
                </a>
                <a href="https://www.linkedin.com/in/brian-ramos-822271201/"
                    target="_blank"
                >
                    <img src={linkedln} alt="linkedln logo" className="socials" />
                </a>
            </section>
        </div>
    );
}

export default Home;
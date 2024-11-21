import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import { useEffect } from 'react';

const FullPicture = () => {
    const location = useLocation();
    useEffect(()=>{
        const navbar = document.getElementById('nav');
        document.body.style.overflow = 'scroll';
        navbar.style.display = '';
    },[])
    const {state} = location
    if (!state) {
        return <div>No data available</div>;
    }
    const { src, name } = state;
    return (
        <div className="fullpic">
            <header className="hero-section">
                <div className="image-container">
                    <img src={src} alt="Chagall, Master Drawings" className="hero-image" />
                    <div className="overlay">
                        <h1>{name}, Master Photography</h1>
                    </div>
                </div>
                <div className="text-container">
                    <h2>Colors and shapes inspire me...</h2>
                    <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. (fillers)
                    </p>
                    <button className="discover-button">Discover collection</button>
                </div>
            </header>
            <main className="welcome-section">
                <h2>Anything you want to include</h2>
                <p>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla porttitor accumsan tincidunt. (fillers)
                </p>
            </main>
        </div>
    );
}
export default FullPicture;
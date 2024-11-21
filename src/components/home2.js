import React, { useEffect, useState } from 'react';
import FrontImage from './frontImage';
import Navbar from './navbar';


const Home2 = () => {
    const [ExpandedSrc, setExpandedSrc] = useState(null);
    const [image, setImage] = useState('image');
    const [ImageTitle, setImageTitle] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    let nextPercentage = 0;
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const track = document.getElementById("image-track");
        const handleOnDown = (e) => {
            track.dataset.mouseDownAt = e.clientX; 
            track.dataset.prevPercentage = track.dataset.percentage || "0";
        };
        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };
        const handleOnMove = (e) => {
            if (track.dataset.mouseDownAt === "0") return;
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;
            const percentage = (mouseDelta / maxDelta) * -100 * 0.5,
                nextPercentageUnconstrained =
                    parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            track.dataset.percentage = nextPercentage;
            track.animate(
                {
                    transform: `translate(${nextPercentage}%, -50%)`
                },
                { duration: 1200, fill: "forwards" }
            );

            for (const image of track.getElementsByClassName("image")) {
                image.animate(
                    {
                        objectPosition: `${100 + nextPercentage}% center`
                    },
                    { duration: 1200, fill: "forwards" }
                );
            }
        };
        const handleOnScroll = (e) => {
            const scrollDelta = e.deltaY || e.detail || e.wheelDelta;
            track.dataset.prevPercentage = track.dataset.percentage || "0";
            console.log("Scroll Delta:", scrollDelta); // Debugging output
            const percentage = (scrollDelta / window.innerWidth) * -100 * 0.5; //Para maedit yung speed
            console.log("Percentage:", percentage); // Debugging output
            const nextPercentageUnconstrained =
              parseFloat(track.dataset.prevPercentage) + percentage;
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            track.dataset.prevPercentage = nextPercentage.toString(); // Update prevPercentage
            track.dataset.percentage = nextPercentage;
            track.animate(
              {
                transform: `translate(${nextPercentage}%, -50%)`
              },
              { duration: 1200, fill: "forwards" }
            );
            for (const image of track.getElementsByClassName("image")) {
              image.animate(
                {
                  objectPosition: `${100 + nextPercentage}% center`
                },
                { duration: 1200, fill: "forwards" }
              );
            }
            console.log("Next Percentage:", nextPercentage); //Pandebug lamang
          };
        window.onmousedown = (e) => handleOnDown(e);
        window.ontouchstart = (e) => handleOnDown(e.touches[0]);
        window.onmouseup = (e) => handleOnUp(e);
        window.ontouchend = (e) => handleOnUp(e.touches[0]);
        window.onmousemove = (e) => handleOnMove(e);
        window.ontouchmove = (e) => handleOnMove(e.touches[0]);
        window.onwheel = (e) => handleOnScroll(e);
        window.onload = (e) => (console.log(nextPercentage));
    });
    
    const HandleImageClick = (e) => {
        const image = e.target;
        setImageTitle(image.id);
        console.log(e.target);
        setExpandedSrc(image.src);
        setImageSrc(image.src);
        const track = document.getElementById("image-track");
        const navbar = document.getElementById('nav');
        track.style.gap = '0vmin';  
        track.style.left = '50%';
        track.style.top = '90%';
        navbar.style.display = 'none';
        setImage('image2');
        
    }
    const CloseImage = (e) => {
        setExpandedSrc(null);
        console.log('ExpandedSrc:', imageSrc);
        const track = document.getElementById("image-track");
        const navbar = document.getElementById('nav');
        track.style.gap = '4vmin';  
        track.style.left = '50%';
        track.style.top = '50%';
        navbar.style.display = '';
        setImage('image');
    }
    const Images = (props) => {
        return(
            <img 
                className={image} 
                title={props.id} 
                src={props.link} 
                draggable="false" 
                onClick={HandleImageClick} 
                id={props.id}
            />
        );
    }
    return (
        <div className='home2-container'>
            <FrontImage 
                classNameParent ={'frontImage'}
                className={"centered darken-image"} 
                src={ExpandedSrc}
                onWheel={CloseImage}
                onMouseDown={CloseImage}
                title={ImageTitle}
            />
            <div className='' id="image-track" data-mouse-down-at="0" data-prev-percentage="0">           
                <Images link="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="Kupi" key="1"/>
                <Images link="https://images.unsplash.com/photo-1508592996740-ce0586a8c3c5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Libs" key="2"/>
                <Images link="https://images.unsplash.com/photo-1600625856206-5e106e9312db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Nichur" key="3"/>
                <Images link="https://images.unsplash.com/photo-1617259979669-c5e10813d62f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Lithaus" key="4"/>
                <Images link="https://images.unsplash.com/photo-1593982957673-43e9d5495d23?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Hand" key="5"/>
                <Images link="https://images.unsplash.com/photo-1623248509281-df1746f49fdb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Pindant" key="6"/>
                <Images link="https://images.unsplash.com/photo-1586871309494-e05cd95c3cfc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"id="Pruts" key="7"/>
                {/* <img className="image3" src='https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img> */}
            </div>
        </div>
        
    );
}
export default Home2;
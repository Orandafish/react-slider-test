import React from 'react';
import { useNavigate } from 'react-router-dom';

const FrontImage = (props) => {
    const navigate = useNavigate();

    if (props.src === null || props.src === "") {
        return null;
    } else {
        return (
            <div className={props.classNameParent}>
                <span className="frontImage-title" onClick={() => navigate('/picture', { state: {src: props.src, name: props.title} })}>
                    <a>{props.title}</a>
                    <p>See more</p>
                </span>
                <img
                    className={props.className}
                    src={props.src}
                    draggable="false"
                    onClick={props.onClick}
                    onWheel={props.onWheel}
                    onMouseDown={props.onMouseDown}
                    id={props.id}
                />
            </div>
        );
    }
};

export default FrontImage;
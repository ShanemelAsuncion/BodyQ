import React from 'react';
import './Card.scss';

const Card = ({ children, className = '', width , height, ...props }) => {
    const cardStyle = {
        width: width,
        height: height,
    };

    return (
        <div className={`card ${className}`} style={cardStyle} {...props}>
            {children}
        </div>
    );
};

export default Card;

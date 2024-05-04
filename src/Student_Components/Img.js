import React from 'react';
import './img.css'; // Import the CSS file for styles
import sampleImage from './awkum_administration_pic.png'; // Import the image file

function Img() {
    return (
        <div className="image-container">
            <div className="sami">

                {/* Render the image inside the div */}
                <img src={sampleImage} alt="Sample Image" className="img-content" />
            </div>
        </div>
    );
}

export default Img;

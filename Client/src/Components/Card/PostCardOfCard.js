import React, { useState } from 'react';


const PostCardOfCard = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full" onClick={goToPrevSlide} > Prev
            </button>

            {images.map((data) => (
                <div key={data.id} className={`w-full transition-transform transform ${data.id === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                    <img className="w-full" src={data.image} alt={`slide-${data.id}`} />
                </div>
            ))}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={goToNextSlide} >
                Next
            </button>
            
        </div>
    );
};

export default PostCardOfCard;
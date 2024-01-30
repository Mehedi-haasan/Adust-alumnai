import React,{useState} from 'react';
import './Carousel.css'

const Carousel = () => {
    const  images =[
        {
          id: 1,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id: 2,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id: 2,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id: 4,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id: 5,
          image: "https://img.freepik.com/free-photo/man-wearing-headphones-sits-computer-with-computer-screen-that-says-call-it_1340-37825.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
        {
          id: 6,
          image: "https://img.freepik.com/free-photo/man-sits-desk-with-laptop-smiles-camera_1340-38226.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated",
        },
      ]
    const [currentIndex, setCurrentIndex] = useState(1);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className="carousel">

            {/* <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full" onClick={goToPrevSlide} > Prev
            </button> */}

            {images.map((data, index) => {
                return <img className="slide" src={data.image} alt="qwer" key={index} />
            })}

            {/* <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={goToNextSlide} >
                Next
            </button> */}

        </div>
    );
};

export default Carousel;
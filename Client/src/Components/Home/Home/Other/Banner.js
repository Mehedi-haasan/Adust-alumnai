import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const member="13,789";
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {/* 1st slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/magnify-nature-beauty-with-hand-held-telescope-generated-by-ai_188544-16943.jpg?size=626&ext=jpg&ga=GA1.2.1402415944.1685737805&semt=ais_ai_generated"
          alt=""
        />
        <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
        <h1 className='text-center text-white text-6xl tracking-[16px] font-bold mt-[150px]'>PHOTO CONTEST</h1>
            <p className='text-center text-2xl italic font-semibold my-1 py-1 text-white'>Join over {member} Photographers and get Photo Contest Updates Delivered Weekly.</p>
            <p className='text-center text-lg text-white italic'>The world’s largest collection of photo contests and photography competitions – Hand-picked for photographers of all levels.<br/>
              Get the best photo contests and competitions from around the world delivered weekly!</p>
        </div>
      </div>
      {/* 2nd slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/canon-lens-captures-glass-selective-focus-generated-by-ai_188544-31105.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated"
          alt=""
        />
                <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
        <h1 className='text-center text-white text-6xl tracking-[16px] font-bold mt-[150px]'>PHOTO CONTEST</h1>
            <p className='text-center text-2xl font-semibold italic my-1 py-1 text-white'>Join over {member} Photographers and get Photo Contest Updates Delivered Weekly.</p>
            <p className='text-center text-lg text-white italic'>The world’s largest collection of photo contests and photography competitions – Hand-picked for photographers of all levels.<br/>
              Get the best photo contests and competitions from around the world delivered weekly!</p>
        </div>
      </div>
      {/* 3rd slide */}
      <div className="relative">
        <img
          className="w-full h-[350px] md:h-[750px]"
          src="https://img.freepik.com/free-photo/cute-boys-playing-nature-sunset-generated-by-ai_188544-29851.jpg?size=626&ext=jpg&ga=GA1.1.1402415944.1685737805&semt=ais_ai_generated"
          alt=""
        />
         <div className="w-[100%] h-[100%] top-0 left-0 absolute flex opacity-100 items-center justify-center flex-col">
           <h1 className='text-center text-white text-6xl tracking-[16px] font-bold mt-[150px]'>PHOTO CONTEST</h1>
            <p className='text-center italic text-2xl font-semibold my-1 py-1 text-white'>Join over {member} Photographers and get Photo Contest Updates Delivered Weekly.</p>
            <p className='text-center text-lg italic text-white'>The world’s largest collection of photo contests and photography competitions – Hand-picked for photographers of all levels.<br/>
              Get the best photo contests and competitions from around the world delivered weekly!</p>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;

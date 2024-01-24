import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WinnerCard from "../../../Card/WinnerCard";

const winners = [
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/man-with-camera_23-2147689324.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Mike rock",
    category: "Summer",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/pretty-lady-model-short-blue-dress-hat-with-retrocamera-her-hands-white_231208-4353.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Jenny mike",
    category: "Wildlife",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/cheerful-handsome-man-eyeglasses-looks-photos-camera_8353-6509.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "John Smith",
    category: "landscape",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/brunette-female-traveler-with-backpack-holds-compact-photo-camera_613910-10432.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Jane sim",
    category: "Portfolio",
  },
];

const Winners = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      //   {
      //     breakpoint: 300,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          Last Month Winners
        </h1>
      </div>
      <Slider {...settings}>
        {winners.map(({ id, image, name, category }) => (
          <div key={id} className="scale-95">
            <WinnerCard image={image} name={name} category={category} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Winners;

import Slider from "react-slick";
import ContestCard from '../../../Card/ContestCard'

const MyContests = () => {
  const data = [
    {
      id: 21,
      image:
        "https://img.freepik.com/free-vector/realistic-background-world-photography-day_23-2149490382.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=ais",
      title: "DSLR Photo Contest",
      details: "Events for DSLR photo contest only",
    },
    {
      id: 22,
      image:
        "https://img.freepik.com/free-vector/couple-drawing-conversation-cartoon-style-illustration_1150-37533.jpg?w=740&t=st=1684602655~exp=1684603255~hmac=f062fdfa089912920fbd1fc2b460171f58dec8c20fbce7bea0dc630afcfb6b2d",
      title: "LandScape Photo Contest",
      details: "Show your skills on landScape Photography",
    },
    {
      id: 23,
      image:
        "https://img.freepik.com/free-vector/green-silhouette-wild-animals_1308-121047.jpg?w=740&t=st=1684602794~exp=1684603394~hmac=753a7468f755d6fe2b56e6a0daeac97b50d5ddd451277e72eb6b5d0cc96cd929",
      title: "WildLife PhotoGraphy",
      details: "Show your skills on Wildlife Photography",
    },
    {
      id: 33,
      image:
        "https://img.freepik.com/free-photo/medium-shot-man-wearing-hat_23-2149126957.jpg?size=626&ext=jpg&ga=GA1.1.834674141.1685085168&semt=robertav1_2_sidr",
      title: "Portfolio PhotoGraphy",
      details: "Show your skills on Portfolio Photography",
    },
  ];
  // slider settings
  var settings = {
    dots: false,
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
    <div className="container mx-auto px-2">
      <div>
        <h1 className="text-4xl text-center my-10 font-semibold uppercase text-red-500">
          My on Going Contests
        </h1>
      </div>
      <Slider {...settings}>
        {data.map(({ id, title, details, image }) => (
          <div key={id} className="scale-95">
            <ContestCard title={title} details={details} image={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyContests;

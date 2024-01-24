import React from 'react'
import Slider from "react-slick";
import ContestCard from '../Card/ContestCard';
import TopEvent from '../Event/TopEvent';

const Contest = () => {
    const data = [
        {
          id: 21,
          image:
            "https://img.freepik.com/free-photo/close-up-professional-digital-camera-tripod_169016-10266.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Macro Photography Contest",
          details: "Events for DSLR photo contest only",
        },
        {
          id: 22,
          image:
            "https://img.freepik.com/free-photo/professional-movie-camera-lens-movie-set_1268-15950.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Macro Photography Contest",
          details: "Show your skills on landScape Photography",
        },
        {
          id: 23,
          image:
            "https://img.freepik.com/free-photo/product-photographer-with-camera-studio_23-2148970262.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Macro Photography Contest",
          details: "Show your skills on Wildlife Photography",
        },
        {
          id: 24,
          image:
            "https://img.freepik.com/free-photo/closeup-hands-checking-film-camera_53876-15922.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Macro Photography Contest",
          details: "Show your skills on Portfolio Photography",
        },
        {
          id: 25,
          image:
            "https://img.freepik.com/free-photo/silhouette-photographer-who-shoots-sunset-mountains_1150-7151.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "LandScape Photography Contest",
          details: "Show your skills on LandScape Photography",
        },
        {
          id: 26,
          image:
            "https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "LandScape Photography Contest",
          details: "Show your skills on LandScape Photography",
        },
        {
          id: 27,
          image:
            "https://img.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_460848-14670.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Creative Photography Contest",
          details: "Show your skills on Creative Photography",
        },
        {
          id: 28,
          image:
            "https://img.freepik.com/free-photo/medium-shot-model-posing-with-cloud-shaped-head_23-2150061723.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Creative Photography Contest",
          details: "Show your skills on Creative Photography",
        },
        {
          id: 29,
          image:
            "https://img.freepik.com/free-vector/slr-camera-grunge-tshirt-design-hand-drawn-sketch-vector-illustration_460848-14467.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "Creative Photography Contest",
          details: "Show your skills on Creative Photography",
        },
        {
          id: 30,
          image:
            "https://img.freepik.com/free-photo/beautiful-deer-relaxing-valley-foggy-day_181624-5918.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "WILDLIFE CONTEST",
          details: "Show your skills on WILDLIFE Photography",
        },
        {
          id: 31,
          image:
            "https://img.freepik.com/free-photo/wild-very-rare-golden-monkey-bamboo-forest_475641-44.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "WILDLIFE CONTEST",
          details: "Show your skills on WILDLIFE Photography",
        },
        {
          id: 32,
          image:
            "https://img.freepik.com/free-photo/selective-focus-head-gorgeous-blue-peacock_181624-6397.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=robertav1_2_sidr",
          title: "WILDLIFE CONTEST",
          details: "Show your skills on WILDLIFE Photography",
        },
        {
          id: 33,
          image:
            "https://img.freepik.com/free-photo/picture-brown-langur-sitting-tree-branch-senegal_181624-6608.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "WILDLIFE CONTEST",
          details: "Show your skills on WILDLIFE Photography",
        },
        {
          id: 34,
          image:
            "https://img.freepik.com/free-photo/man-with-camera-world-photographer-day_1150-23278.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "WILDLIFE CONTEST",
          details: "Show your skills on WILDLIFE Photography",
        },
        {
          id: 35,
          image:
            "https://img.freepik.com/free-photo/young-shirtless-male-with-backpack-standing-mountain-taking-picture-cloudy-sky_181624-44076.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "TRAVEL PHOTOGRAPHY CONTEST",
          details: "Show your skills on TRAVEL Photography",
        },
        {
          id: 36,
          image:
            "https://img.freepik.com/free-photo/close-up-camera-with-beautiful-background_23-2148258823.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "TRAVEL PHOTOGRAPHY CONTEST",
          details: "Show your skills on TRAVEL Photography",
        },
        {
          id: 37,
          image:
            "https://img.freepik.com/free-photo/portrait-smiling-afro-american-guy-leather-jacket_171337-1348.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "PORTRAIT PHOTOGRAPHY CONTEST",
          details: "Show your skills on PORTRAIT Photography",
        },
        {
          id: 37,
          image:
            "https://img.freepik.com/free-photo/professional-photographer-standing-isolated-lilac_176532-7421.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=robertav1_2_sidr",
          title: "PORTRAIT PHOTOGRAPHY CONTEST",
          details: "Show your skills on PORTRAIT Photography",
        },
        {
          id: 38,
          image:
            "https://img.freepik.com/free-photo/woman-taking-photo-rural-surroundings_23-2149125496.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
        {
          id: 39,
          image:
            "https://img.freepik.com/free-vector/flat-man-taking-photos-with-smartphone_23-2149052417.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
        {
          id: 40,
          image:
            "https://img.freepik.com/free-vector/photos-concept-illustration_114360-4932.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
        {
          id: 41,
          image:
            "https://img.freepik.com/free-photo/girl-hand-taking-photo-foggy-winter-forest-with-phone_181624-42945.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
        {
          id: 42,
          image:
            "https://img.freepik.com/free-vector/flat-people-taking-photos-with-smartphone_23-2149007605.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
        {
          id: 43,
          image:
            "https://img.freepik.com/free-vector/hands-holding-smartphone-with-selfie-screen-friends-taking-photo-together-flat-vector-illustration-friendship-communication-technology-concept-banner-website-design-landing-web-page_74855-24203.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.2.282190101.1684599001&semt=robertav1_2_sidr",
          title: "MOBILE PHOTOGRAPHY CONTEST",
          details: "Show your skills on MOBILE Photography",
        },
      ];
      var settings1 = {
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
        ],
      };
      var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 2,
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
        ],
      };
  return (
      <>
          <div className="mt-10">
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          Macro Photography Contest
        </h1>
        <Slider {...settings1}>
          {data
            .filter((item) => item.title === "Macro Photography Contest")
            .map(({ id, title, details, image }) => (
              <div key={id} className="scale-95">
                <ContestCard title={title} details={details} image={image} />
              </div>
            ))}
        </Slider>
      </div>
      <div className="my-10 md:w-[80%] m-auto">
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          LandScape Photo Contest
        </h1>
        <Slider {...settings}>
          {data
            .filter((item) => item.title === "LandScape Photography Contest")
            .map(({ id, title, details, image }) => (
              <div key={id} className="scale-95">
                <ContestCard title={title} details={details} image={image} />
              </div>
            ))}
        </Slider>
      </div>
    <TopEvent/>
      <div className="my-10 md:w-[80%] m-auto">
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          Creative Photo Contest
        </h1>
        <Slider {...settings1}>
          {data
            .filter((item) => item.title === "Creative Photography Contest")
            .map(({ id, title, details, image }) => (
              <div key={id} className="scale-95">
                <ContestCard title={title} details={details} image={image} />
              </div>
            ))}
        </Slider>
      </div>
      <div className="my-10">
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          Wildlife Contest
        </h1>
        <Slider {...settings1}>
          {data
            .filter((item) => item.title === "WILDLIFE CONTEST")
            .map(({ id, title, details, image }) => (
              <div key={id} className="scale-95">
                <ContestCard title={title} details={details} image={image} />
              </div>
            ))}
        </Slider>
      </div>

        <div className="my-10 md:w-[80%] m-auto">
        <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-red-500">
          Mobile Photography Contest
        </h1>
        <Slider {...settings1}>
          {data
            .filter((item) => item.title === "MOBILE PHOTOGRAPHY CONTEST")
            .map(({ id, title, details, image }) => (
              <div key={id} className="scale-95">
                <ContestCard title={title} details={details} image={image} />
              </div>
            ))}
        </Slider>
      </div>
      </>
  )
}

export default Contest

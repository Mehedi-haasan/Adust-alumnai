import { Link } from "react-router-dom";
import TimerContestCard from "../Contest/TimerContestCard";

const events = [
  {
    id: 100,
    image:
      "https://img.freepik.com/free-vector/realistic-background-world-photography-day_23-2149490382.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=ais",
    name: "DSLR Photo Contest",
    category: "Portfolio",
    time: "12/07/2023",
  },
  {
    id: 101,
    image:
      "https://img.freepik.com/free-vector/couple-drawing-conversation-cartoon-style-illustration_1150-37533.jpg?w=740&t=st=1684602655~exp=1684603255~hmac=f062fdfa089912920fbd1fc2b460171f58dec8c20fbce7bea0dc630afcfb6b2d",
    name: "LandScape Contest",
    category: "LandScape",
    time: "22/07/2023",
  },
  {
    id: 102,
    image:
      "https://img.freepik.com/free-vector/green-silhouette-wild-animals_1308-121047.jpg?w=740&t=st=1684602794~exp=1684603394~hmac=753a7468f755d6fe2b56e6a0daeac97b50d5ddd451277e72eb6b5d0cc96cd929",
    name: "Wildlife Photography",
    category: "Wildlife",
    time: "11/08/2023",
  },
  {
    id: 103,
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-hat_23-2149126957.jpg?size=626&ext=jpg&ga=GA1.1.834674141.1685085168&semt=robertav1_2_sidr",
    name: "Portfolio Photography",
    category: "Portfolio",
    time: "22/08/2023",
  },
  {
    id: 104,
    image:
      "https://img.freepik.com/free-photo/camera-shuttlecock-pinwheel-summer-with-clothespin-wooden-desk_23-2148153985.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Summer Photo Contest",
    category: "Summer",
    time: "23/08/2023",
  },
  {
    id: 105,
    image:
      "https://img.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_460848-14670.jpg?size=626&ext=jpg&ga=GA1.1.834674141.1685085168&semt=locales",
    name: "Creative PhotoContest",
    category: "Creative",
    time: "17/09/2023",
  },
];

const Events = () => {
  return (
    <div className="container mx-auto px-2">
      <div>
        <h1 className="text-4xl text-center my-10 font-semibold uppercase text-red-500">
          On Going Events
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map(({ id, image, name, category, time }) => (
          <TimerContestCard
            key={id}
            image={image}
            name={name}
            category={category}
            time={time}
          />
        ))}
      </div>
      <Link>
        <div className="flex justify-center mt-6 mb-10">
          <button className="hover:text-white bg-red-300 px-8 py-2 rounded-md duration-300 hover:bg-green-300">
            View All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Events;

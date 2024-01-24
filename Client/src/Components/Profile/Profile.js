import React, { useState } from "react";
import ContestCard from "../Card/ContestCard";

const Profile = () => {
  const [joined, setJoined] = useState(true);
  const [win, setWin] = useState(false);

  const data = [
    {
      id: 11,
      image:
        "https://img.freepik.com/free-vector/realistic-background-world-photography-day_23-2149490382.jpg?size=626&ext=jpg&uid=R102445781&ga=GA1.1.282190101.1684599001&semt=ais",
      title: "DSLR Photo Contest",
      details: "Events for DSLR photo contest only",
    },
    {
      id: 12,
      image:
        "https://img.freepik.com/free-vector/couple-drawing-conversation-cartoon-style-illustration_1150-37533.jpg?w=740&t=st=1684602655~exp=1684603255~hmac=f062fdfa089912920fbd1fc2b460171f58dec8c20fbce7bea0dc630afcfb6b2d",
      title: "LandScape Photo Contest",
      details: "Show your skills on landScape Photography",
    },
    {
      id: 13,
      image:
        "https://img.freepik.com/free-vector/green-silhouette-wild-animals_1308-121047.jpg?w=740&t=st=1684602794~exp=1684603394~hmac=753a7468f755d6fe2b56e6a0daeac97b50d5ddd451277e72eb6b5d0cc96cd929",
      title: "WildLife PhotoGraphy",
      details: "Show your skills on Wildlife Photography",
    },
  ];

  const handleJoined = () => {
    setJoined(true);
    setWin(false);
  };

  const handleWin = () => {
    setJoined(false);
    setWin(true);
  };
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-10">
        {/* Profile */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className=" bg-gray-200 p-3 rounded-md">
            <div className="bg-white p-3 rounded-md">
              <div className="">
                <img
                  className="w-full h-80 rounded"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=ais"
                  alt=""
                />
              </div>
              <div className="space-y-3">
                <h1 className="text-bold text-xl text-red-500 mt-3">
                  John Smith
                </h1>
                <h2>Email: johnsmoth@email.com</h2>
                <p>Phone: +880 171 095595</p>
                <div className="text-center">
                  <button className="bg-gray-300 px-6 py-2 rounded-md hover:bg-red-500 hover:text-gray">
                    Edit profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-3 grid gap-5 rounded-md">
            <div className="bg-white p-3 rounded-md flex flex-col items-center justify-center">
              <h1 className="text-red-500 text-xl uppercase">
                My total Earning
              </h1>
              <p>13,330 BDT</p>
            </div>
            <div className="bg-white p-3 rounded-md flex flex-col items-center justify-center">
              <h1 className="text-red-500 text-xl uppercase">
                Total contest joined{" "}
              </h1>
              <p>45</p>
            </div>
          </div>
        </div>
        {/* toggle buttons */}
        <div className="flex justify-center space-x-5 mt-10">
          <div>
            <button
              className={`${joined && "border-b-2 border-red-500"}
              uppercase text-2xl `}
              onClick={handleJoined}
            >
              Currently Joined
            </button>
          </div>
          <div>
            <button
              className={`uppercase text-2xl ${
                win && "border-b-2 border-red-500"
              }`}
              onClick={handleWin}
            >
              Won Contests
            </button>
          </div>
        </div>
      </div>
      {/* total joined cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 max-w-screen-2xl mx-auto">
        {data.map((datas) => (
          <React.Fragment key={datas.id}>
            {joined && (
              <ContestCard
                title={datas.title}
                details={datas.details}
                image={datas.image}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Total win Card */}
      <div>
        {win && (
          <div className="max-w-screen-2xl mx-auto  ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 overflow-hidden">
              <div className="relative group">
                <img
                  className="h-72 w-[500px]"
                  src="https://img.freepik.com/free-vector/green-silhouette-wild-animals_1308-121047.jpg?w=740&t=st=1684602794~exp=1684603394~hmac=753a7468f755d6fe2b56e6a0daeac97b50d5ddd451277e72eb6b5d0cc96cd929"
                  alt=""
                />
                <div className="absolute duration-500 top-0 -left-[600px] group-hover:left-0 h-72 w-[500px] bg-primary bg-opacity-60"></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                  <button
                    disabled
                    className="bg-secondary uppercase hover:cursor-not-allowed text-primary px-6 py-2 rounded-md"
                  >
                    Event Ended
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

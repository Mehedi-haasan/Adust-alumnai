import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import image from '../Image/Image1/banner.jpg'
// import image from '../../../Image/Image1/banner.jpg'



const TopEvent = () => {
  const [timeOver, setTimeOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("7/20/2023  14:09:59");

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeOver(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="m-auto">
      <div>
        <h1 className="text-4xl text-center my-8 font-semibold uppercase text-red-500">
          Top Event
        </h1>
      </div>
      <div>
        {timeOver ? (
          <div>
            <h1 className="text-2xl text-center mb-14 font-semibold uppercase text-secondary">
              Big Event Ended
            </h1>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-6 lg:left-24 md:left-12 flex md:text-xl lg:text-4xl text-center text-secondary font-semibold">
              <h1 className="border-r-2 border-red-700 px-2">
                {days}
                <p>Days</p>
              </h1>
              <h1 className="border-r-2 border-red-700 px-2">
                {hours}
                <p>Hours</p>
              </h1>
              <h1 className="border-r-2 border-red-700 px-2">
                {minutes}
                <p>Minutes</p>
              </h1>
              <h1 className="px-2">
                {seconds}
                <p>Seconds</p>
              </h1>
            </div>
            <div>
              <NavLink className="absolute uppercase bottom-16 lg:bottom-28 lg:left-64 md:left-32 left-10 bg-red-200 px-8 py-2 rounded-md hover:bg-green-300 hover:text-white duration-300" to='/contestrules'>
                Join Now
              </NavLink>
            </div>
            <img
              className="lg:h-[650px] h-[450px] w-full  rounded"
              src={image}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopEvent;

import React,{useState,useEffect} from 'react'

const Time = () => {
    const [timeOver, setTimeOver] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
        const target = new Date("6/20/2023  14:09:59");
    
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
    <div>
    <div>
      <h1 className="text-4xl text-center mb-14 font-semibold uppercase text-primary">
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
        <div className="">
          <div className="">
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
            <button className="absolute uppercase bottom-16 lg:bottom-28 lg:left-64 md:left-32 left-10 bg-secondary px-8 py-2 rounded-md hover:bg-primary hover:text-white duration-300">
              Join Now
            </button>
          </div>
          {/* <img
            className="lg:h-[650px] h-[450px] w-full "
            src={event}
            alt=""
          /> */}
        </div>
      )}
    </div>
  </div>
  )
}

export default Time

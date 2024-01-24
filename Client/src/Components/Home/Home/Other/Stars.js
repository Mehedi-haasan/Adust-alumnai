import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 21,
    title: "Total Contester",
    numbers: "800",
  },
  {
    id: 22,
    title: "Total Photos",
    numbers: "3210",
  },
  {
    id: 23,
    title: "Winners",
    numbers: "70",
  },
  {
    id: 24,
    title: "Total Events",
    numbers: "90",
  },
];

const Stats = () => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = countRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div className="">
      <div>
        <h1 className="text-4xl text-center mt-10 mb-10 font-semibold uppercase text-red-500">
          Our Stats
        </h1>
      </div>
      <div className="grid bg-secondary bg-opacity-50 bg-gradient-to-br from-slate-50 to-red-300 grid-cols-2 md:grid-cols-4 items-center justify-center w-full gap-4 h-44">
        {stats.map((stat) => (
          <div
            className="flex flex-col justify-center items-center"
            key={stat.id}
            ref={countRef}
          >
            <p className="text-4xl text-primary">
              {isVisible && (
                <CountUp
                  start={10}
                  end={stat.numbers}
                  duration={6}
                  //   ref={countRef}
                />
              )}
              +
            </p>
            <h1 className="text-xl">{stat.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

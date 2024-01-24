
import { NavLink } from 'react-router-dom';
const ContestCard = ({ id, image, title, details }) => {
    return (
      <>
      <div
        key={id}
        className="bg-cover bg-no-repeat bg-center rounded-md"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="space-y-4 flex flex-col justify-center rounded-md items-center bg-red-400 bg-opacity-80 md:opacity-0 md:hover:opacity-100 duration-500 text-white text-center h-72 w-full">
          <div>
            <h1 className="md:text-3xl text-xl">{title}</h1>
            <p className="text-xs md:text-sm">{details}</p>
          </div>
          <NavLink className="px-8 py-2 bg-[#F4F2F0] mb-4 text-black md:hover:bg-ash md:hover:text-gray rounded-md" to='/contestrules'>
            More Details
          </NavLink>
        </div>
      </div>
      </>
    );
  };
  export default ContestCard;
const WinnerCard = ({ id, image, name, category }) => {
    return (
      <div className="bg-gray-200 rounded-md">
        <div>
          <img src={image} alt="" className="w-full h-72 p-3 rounded-md" />
        </div>
        <div className="flex justify-between items-center px-2 py-5">
          <h1 className="text-xl font-semibold uppercase">{name}</h1>
          <h1>
            <span className="text-xl font-semibold mr-2 text-ash">Contest:</span>
            <span className="bg-red-500 px-4 py-1 rounded-full text-white">
              {category}
            </span>
          </h1>
        </div>
      </div>
    );
  };
  
  export default WinnerCard;
  
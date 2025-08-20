import React from 'react';
import { useNavigate } from 'react-router-dom';


const HighestRatedCard = ({ id, name, rating, imageUrl, schoolName }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/list-frat/${id}`); // navigate to ListFrat page with this frat's id
  };

  return (
    <div onClick={handleClick} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={`${name} house`}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        {schoolName && (
          <p className="text-gray-600 text-sm">School: {schoolName}</p>
        )}
        <p className="text-gray-600 text-sm">Rating: {rating.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default HighestRatedCard;
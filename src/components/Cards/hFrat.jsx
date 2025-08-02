import React from 'react';

const HighestRatedCard = ({ name, reviewCount, rating, imageUrl, schoolName }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
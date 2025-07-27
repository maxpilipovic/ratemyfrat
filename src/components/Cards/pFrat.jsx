import React from 'react';

const PopularCard = ({ name, reviewCount, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={`${name} campus`}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">Reviews: {reviewCount}</p>
        <p className="text-gray-600 text-sm">Rating: {rating.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default PopularCard;

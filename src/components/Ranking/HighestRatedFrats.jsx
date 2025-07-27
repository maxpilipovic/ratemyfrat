import React, { useState, useEffect } from 'react';
import { getHighestRatedFrats } from '../../services/firebase';

const HighestRatedFrats = () => {
  const [frats, setFrats] = useState([]);

  useEffect(() => {
    const fetchFrats = async () => {
      const highestRatedFrats = await getHighestRatedFrats();
      setFrats(highestRatedFrats);
    };
    fetchFrats();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Highest Rated Fraternities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {frats.map((frat) => (
          <div key={frat.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{frat.name}</h3>
            <p className="text-gray-600">School: {frat.schoolName}</p>
            <p className="text-gray-600">Rating: {frat.averageRating.toFixed(1)}</p>
            <p className="text-gray-600">Reviews: {frat.reviewCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedFrats;

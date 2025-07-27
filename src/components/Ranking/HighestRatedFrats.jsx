import React, { useState, useEffect } from 'react';
import { getHighestRatedFrats } from '../../services/firebase';
import HighestRatedCard from '../Cards/hFrat.jsx';

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
          <HighestRatedCard
            key={frat.id}
            name={frat.name}
            rating={frat.averageRating}
            reviewCount={frat.reviewCount}
            schoolName={frat.schoolName}
            imageUrl={frat.imageUrl || '/default-frat.jpg'}
          />
        ))}
      </div>
    </div>
  );
};

export default HighestRatedFrats;

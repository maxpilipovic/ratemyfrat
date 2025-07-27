import React, { useState, useEffect } from 'react';
import { getPopularFrats } from '../../services/firebase';
import PopularCard from '../Cards/pFrat.jsx';

const PopularFrats = () => {
  const [frats, setFrats] = useState([]);

  useEffect(() => {
    const fetchFrats = async () => {
      const popularFrats = await getPopularFrats();
      setFrats(popularFrats);
    };
    fetchFrats();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Popular Fraternities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {frats.map((frat) => (
          <PopularCard
            key={frat.id}
            name={frat.name}
            reviewCount={frat.reviewCount}
            rating={frat.averageRating}
            imageUrl={frat.imageUrl || '/default-frat.jpg'}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularFrats;

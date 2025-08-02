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
    <div className="p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Most Popular Fraternities</h2>

      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {frats.map((frat) => (
            <div key={frat.id} className="min-w-[250px] min-h-[250px]">
              <PopularCard
                key={frat.id}
                name={frat.name}
                reviewCount={frat.reviewCount}
                rating={frat.averageRating}
                imageUrl={frat.imageUrl || '/default-frat.jpg'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFrats;
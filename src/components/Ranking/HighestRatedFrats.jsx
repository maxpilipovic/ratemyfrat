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
    <div className="p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Highest Rated Fraternities</h2>

      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {frats.map((frat) => (
            <div key={frat.id} className="min-w-[250px] min-h-[250px]">
              <HighestRatedCard
                key={frat.id}
                name={frat.name}
                rating={frat.averageRating}
                schoolName={frat.schoolName}
                imageUrl={frat.imageUrl || '/default-frat.jpg'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighestRatedFrats;
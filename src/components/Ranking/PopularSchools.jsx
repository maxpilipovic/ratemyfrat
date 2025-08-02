import React, { useState, useEffect } from 'react';
import { getPopularSchools } from '../../services/firebase';
import SchoolCard from '../Cards/schoolCard.jsx';

const PopularSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const popularSchools = await getPopularSchools();
      console.log(popularSchools);
      setSchools(popularSchools);
    };
    fetchSchools();
  }, []);

  return (
    <div className="p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Most Popular Schools</h2>

      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {schools.map((school) => (
            <div key={school.id} className="min-w-[250px] min-h-[250px]">
              <SchoolCard
                name={school.name}
                reviewCount={school.reviewCount}
                imageUrl={school.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSchools;

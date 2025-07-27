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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Popular Schools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {schools.map((school) => (
          <SchoolCard
            key={school.id}
            name={school.name}
            reviewCount={school.reviewCount}
            imageUrl={school.imageUrl} // fallback image
          />
        ))}
      </div>
    </div>
  );
};

export default PopularSchools;

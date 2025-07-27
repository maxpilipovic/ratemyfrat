import React, { useState, useEffect } from 'react';
import { getPopularSchools } from '../../services/firebase';

const PopularSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const popularSchools = await getPopularSchools();
      setSchools(popularSchools);
    };
    fetchSchools();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Most Popular Schools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {schools.map((school) => (
          <div key={school.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{school.name}</h3>
            <p className="text-gray-600">Reviews: {school.reviewCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSchools;

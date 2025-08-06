import React from 'react';
import { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../services/firebase';
import { Link } from 'react-router-dom';

const AllSchools = () => {

  const [schools, setSchools] = useState([]);
  const [groupedByState, setGroupedByState] = useState({});

  useEffect(() => {
    const fetchSchools = async () => {
      const querySnapshot = await getDocs(collection(db, 'schools'));
      const schoolsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSchools(schoolsData);

      // Group by state
      const grouped = {};
      schoolsData.forEach(school => {
        const state = school.state || "Unknown";
        if (!grouped[state]) {
          grouped[state] = [];
        }
        grouped[state].push(school);
      });
      setGroupedByState(grouped);
    };

    fetchSchools();
  }, []);

  return (
    <div className="p-8 pl-16">
      <h1 className="text-3xl">
        {schools.length} schools on RateMyFrat
      </h1>

      <p className="text-sm text-blue-500 ml-1 mb-4">
        <Link to="/add-school">
          Add School
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mb-1">United States</h2>
      {Object.entries(groupedByState).map(([state, schoolsInState]) => (
        <div key={state} className="mb-6">
          <h2 className="text-lg font-semibold ml-1 mb-2">{state}</h2>
          <ul className="list-disc list-inside ml-4">
            {schoolsInState.map((school) => (
              <li key={school.id}>{school.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AllSchools;
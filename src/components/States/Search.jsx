import React, { useEffect, useState, useRef } from 'react';
import hImage from '../../assets/banner.jpg';
import { getAllSchools } from '../../services/firebase.js';

const Search = () => {
  const [query, setQuery] = useState(''); //What users types in search bar
  const [allSchools, setAllSchools] = useState([]); //All schools fetched from Firebase
  const [filteredSchools, setFilteredSchools] = useState([]); //Filtered schools based on query
  const [showDropdown, setShowDropdown] = useState(false); //Dropdown visabile or not
  const inputRef = useRef(); //Ref to dom for clicks

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await getAllSchools(); //This should return an array of { id, name, ... }
      setAllSchools(schools);
      setFilteredSchools(schools);
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    //If empty
    if (!query.trim()) {
      setFilteredSchools(allSchools);
    } else {
      //Filter schools based on query
      const results = allSchools.filter((school) =>
        school.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSchools(results);
    }
  }, [query, allSchools]);

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <img src={hImage} alt="Background" className="w-full h-full object-cover" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-30 bg-black">
        <h1 className="text-3xl font-bold mb-4 text-white text-center px-4">
          Find the best fraternities and schools near you.
        </h1>

        <div className="relative w-full max-w-lg" ref={inputRef}>
          <input
            type="text"
            placeholder="Scroll to browse schools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            className="w-full p-3 rounded-t-xl bg-white text-gray-800 shadow-md focus:outline-none"
          />

          {showDropdown && (
            <div className="absolute w-full bg-white shadow-md rounded-b-xl max-h-[200px] overflow-y-auto z-10">
              {filteredSchools.length > 0 ? (
                filteredSchools.map((school) => (
                  <div
                    key={school.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                    onClick={() => alert(`Navigate to: ${school.name}`)}
                  >
                    {school.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">
                  <p className="mb-2">No schools found.</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert('Add School clicked')}
                      className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Add School
                    </button>
                    <button
                      onClick={() => {
                        setQuery('');
                        setShowDropdown(true);
                        setFilteredSchools(allSchools);
                      }}
                      className="text-xs bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
                    >
                      View All Schools
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
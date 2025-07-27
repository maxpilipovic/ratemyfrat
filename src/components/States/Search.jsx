import React from 'react';
import hImage from '../../assets/banner.jpg';

const Search = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src={hImage} // Replace with your image path (e.g., from /public)
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
  
      {/* Overlay with Search Bar */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-30">
        <h1 className="text-3xl font-bold mb-4">
          Find the best fraternities and schools near you.
        </h1>

        <input
          type="text"
          placeholder="Search fraternities or schools..."
          className="w-1/2 p-3 rounded-full bg-white text-gray-800 shadow-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
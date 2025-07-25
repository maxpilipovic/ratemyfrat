import React from 'react';
import hImage from '../../assets/greekhomepage.png';

const Search = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <img
        src={hImage} // Replace with your image path (e.g., from /public)
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay with Search Bar */}
      <div className="absolute inset-0 flex justify-center items-center bg-opacity-30">
        <input
          type="text"
          placeholder="Search fraternities or schools..."
          className="w-1/2 p-3 rounded-full text-gray-800 shadow-md focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
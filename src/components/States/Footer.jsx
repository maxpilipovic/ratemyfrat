import React from 'react';
{/* Add reacter router*/}
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-10 mt-16 shadow-sm">
      <h1 className="text-5xl font-bold mb-8">RateMyFrat</h1>

      <div className="flex justify-center space-x-6 mb-4 text-lg">
        <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
        <Link to="/schools" className="text-gray-700 hover:text-blue-600 transition">All Schools</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
      </div>

      <div className="text-xs text-gray-500 space-x-4">
        <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
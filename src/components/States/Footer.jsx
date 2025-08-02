import React from 'react';
{/* Add reacter router*/}

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-10 mt-16 shadow-lg">
        <h1 className="text-5xl font-bold mb-8">RateMyFrat</h1>

        <div className="flex justify-center space-x-6 mb-4 text-lg">
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
            <a href="/schools" className="text-gray-700 hover:text-blue-600 transition">All Schools</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
        </div>

        <div className="text-xs text-gray-500 space-x-4">
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <span>All rights reserved.</span>
        </div>
    </footer>
  );
};

export default Footer;
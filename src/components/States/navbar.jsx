import React from 'react';
import { useState } from 'react';
import SignUpModal from './SignupModal.jsx';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-xl font-bold">RateMyFrat</div>
              <div>
               <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Sign Up
                </button>
              </div>
            </div>
          </nav>
          <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Navbar;

import React from 'react';
import { useState } from 'react';
import SignUpModal from './SignUpModal.jsx';
import iImage from '../assets/instagram.png';
import tImage from '../assets/tiktok.png';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <nav className="text-black p-4">
            <div className="mx-auto flex items-center">
              <div className="w-1/3 flex justify-start space-x-4 py-2 px-4">
                {/* Empty space on left - Social Media future */}
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={iImage} alt="Instagram" className="w-6.5 h-6.5 hover:opacity-70" />
                  </a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <img src={tImage} alt="TikTok" className="w-6.5 h-6.5 hover:opacity-70" />
                  </a>
              </div>

              {/* Center section */}
              <div className="w-1/3 flex justify-center">
                <div className="text-3xl text-center font-bold">RateMyFrat</div>
              </div>

              {/* Right section */}
              <div className="w-1/3 flex justify-end">
               <button onClick={openModal} className=" text-black font-bold py-2 px-4">
                 Sign In
                </button>
              </div>
            </div>
          </nav>
          <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Navbar;

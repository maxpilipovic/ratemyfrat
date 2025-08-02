import React from 'react';
import handleGoogleLogin from './Handlers/handleGoogleLogin';
import verifiedStudentBadge from '../assets/6711626.png';

const SignUpModal = ({ isOpen, onClose }) => {
       if (!isOpen) {
         return null;
       }
     
       return (
        <div className="fixed inset-0 shadow-blue-400/40 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-3">Sign in with your school email</h2>
            <p className="text-gray-600 mb-4 text-sm">
              With your review, we'll let readers know you're a real student with this badge:
            </p>
            <img
              src={verifiedStudentBadge}
              alt="Verified Student Badge"
              className="w-10 h-10 mx-auto mb-4"
            />

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center space-x-3 border border-gray-300 rounded-lg py-2 px-4 w-full hover:shadow-md transition"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            <button
              onClick={onClose}
              className="mt-6 text-sm text-gray-500 hover:text-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      );
    };
    
    export default SignUpModal;


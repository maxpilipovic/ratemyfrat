import React from 'react';
import handleGoogleLogin from './Handlers/handleGoogleLogin';
import verifiedStudentBadge from '../assets/6711626.png';

const SignUpModal = ({ isOpen, onClose }) => {
       if (!isOpen) {
         return null;
       }
     
       return (
         <div className="fixed inset-0 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign in with school email</h2>
            <p>With your review, we'll let readers know you're a real student with this badge:</p>
            <img
              src={verifiedStudentBadge}
              alt="Verified Student Badge"
              className="w-6 h-6 mx-auto my-2"
            />
            
            <p> Sign in with Google</p>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGoogleLogin}
              >
                Login with Google
              </button>
              {/* <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                // Add your one-time sign-up link logic here
              >
                Get One-Time Sign Up Link
              </button> */}
            </div>
           <button
              onClick={onClose}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      );
    };
    
    export default SignUpModal;


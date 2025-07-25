import React from 'react';
import handleGoogleLogin from '../Handlers/handleGoogleLogin';

const SignUpModal = ({ isOpen, onClose }) => {
       if (!isOpen) {
         return null;
       }
     
       return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGoogleLogin}
              >
                Login with Google
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                // Add your one-time sign-up link logic here
              >
                Get One-Time Sign Up Link
              </button>
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


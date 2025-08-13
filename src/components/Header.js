import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSinOut = () => {
       signOut(auth).then(() => {
        navigate("/");
        }).catch((error) => {
             navigate("/error");
        });
    };

      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate("/browse");
         }
            else {
                dispatch(removeUser());
                navigate("/");
            }
        });

    },[]);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex items-center justify-between">
      
      {/* Logo */}
      <img className="w-40" src="/netflix-logo.png" alt="Netflix Logo" />

      {/* Right Side: Language Selector + Sign In Button */}
      <div className="flex items-center gap-4">
        
        {/* Language Selector */}
        <select
          className="bg-black text-white border border-gray-400 px-2 py-1 rounded"
          defaultValue="en"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>

        {/* Sign In Button */}
        <button 
        className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 transition duration-300"
        onClick={handleSinOut}
        >
          Sign Out
        </button>

      </div>
    </div>
  );
};

export default Header;

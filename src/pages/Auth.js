import React, { useState } from 'react';
import LoginImg from '../assets/runn.jpg';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../assets/google-icon.svg';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const [signUp, setSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      localStorage.setItem('user', JSON.stringify(providerData[0]));
      console.log(providerData[0]);

      dispatch(authActions.setUser(providerData[0]));
      navigate('/');
      await setDoc(doc(db, 'users', providerData[0].uid), {
        name: providerData[0].displayName,
        email: providerData[0].email,
        photo: providerData[0].photoURL,
        orders: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      const {
        user: { providerData },
      } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(firebaseAuth.currentUser, { displayName: username });
      dispatch(authActions.setUser(providerData[0]));
      navigate('/');
      localStorage.setItem('user', JSON.stringify(providerData[0]));
      setEmail('');
      setPassword('');
      setUsername('');

      await setDoc(doc(db, 'users', providerData[0].uid), {
        name: providerData[0].displayName,
        email: providerData[0].email,
        photo: providerData[0].photoURL,
        orders: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const {
        user: { providerData },
      } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(authActions.setUser(providerData[0]));
      navigate('/');
      localStorage.setItem('user', JSON.stringify(providerData[0]));
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 ">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 ... py-8 flex  md:space-x-10 justify-center">
        <div className="md:flex hidden ">
          <img
            src={LoginImg}
            alt="LoginImg"
            className="object-cover h-[calc(140vh-7rem)] rounded-xl shadow-lg"
          />
        </div>
        <div className="flex px-12">
          <form className="sm:max-w-[25rem] w-full bg-blue-100  rounded-xl flex flex-col space-y-4 shadow-lg py-10 px-12">
            <p className="text-[2rem] sm:text-[2rem] captilize mb-4 text-center">
              SOLEMATE SHOES
            </p>

            {!signUp && (
              <h3 className="text-base font-medium fonts-serif text-center pb-4 px-1">
                     Shoes that fit your lifestyle             </h3>
            )}
            <div className="flex flex-col space-y-10">
              {signUp && (
                <div className="relative ">
                  <input
                    required
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="username"
                    className="peer w-full h-10 placeholder-transparent outline-none border-b-2 border-gray-300 focus:border-indigo-600 transition-all "
                    placeholder="username"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0  -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Username
                  </label>
                </div>
              )}

              <div className="relative ">
                <input
                  required
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required placeholder="password"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0  -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                </label>
              </div>

              <div className="relative ">
                <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required placeholder="password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0  -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                </label>
              </div>
              <div className="flex flex-col space-y-1">
                </div>

            </div>
           
            {signUp ? (
              <button
                onClick={(e) => signUpWithEmail(e)}
                className="w-full h-10 flex-shrink-0 bg-blue my-4 outline outline-2 text-black font-medium rounded-md hover:bg-gray-500 transition-colors">
                Sign Up
              </button>
            ) : (
              <button 
                type="button" 
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={(e) => signInWithEmail(e)}>
                Sign In
              </button>
            )}

            <p className=" text-center flex items-center justify-center gap-2">
              {signUp
                ? 'Already have a account yet?'
                : `Don't have a account yet?`}
              <span
                onClick={(e) => setSignUp(!signUp)}
                className="text-blue-900 text-[1.05rem] cursor-pointer">
                {signUp ? 'SignIn' : 'SignUp'}
              </span>
            </p>
            <p className=" text-center ">Or</p>
            <div className="flex gap-7">
            <button type="button" className="text-black bg-[#fff] hover:bg-[#6ab9f6]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-20 py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-4 mb-2">
            <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  className="inline-block"
                  width={17}
                  height={17}
                />
                Sign in with Google
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

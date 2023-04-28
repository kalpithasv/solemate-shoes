import React, { useState } from 'react';
import AuthImg from '../assets/runn.jpg';
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
    <div className="h-[calc(100vh-4rem)]  w-full  flex  md:space-x-10 ">
      <div className="md:flex hidden w-1/2">
        <img
          src={AuthImg}
          alt="AuthImg"
          className="h-full w-full object-bottom object-cover overflow-hidden shadow-lg"
        />
      </div>
      <div className="flex px-5 justify-center items-center md:w-1/2 w-full ">
        <form className=" md:w-[27rem] w-full h-full md:justify-evenly rounded-xl flex flex-col justify-center px-4 py-5  space-y-8 md:space-y-0">
          <div>
            <p className="text-[1.5rem] sm:text-[2rem] captilize mb-5 text-center">
              SOLEMATE SHOES
            </p>

            {!signUp && (
              <h3 className="text-base font-medium  text-center pb-4 px-5">
                Shoes that fit your lifestyle
              </h3>
            )}
          </div>
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
                className="peer w-full h-10 placeholder-transparent outline-none border-b-2 border-gray-300 focus:border-indigo-600 transition-all "
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0  -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Email
              </label>
            </div>

            <div className="relative ">
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                className="peer w-full h-10 placeholder-transparent outline-none border-b-2 border-gray-300 focus:border-indigo-600 transition-all mb-5"
                placeholder="password"
              />
              <label
                htmlFor="password"
                className="absolute left-0  -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Password
              </label>
            </div>
          </div>

          {signUp ? (
            <button
              onClick={(e) => signUpWithEmail(e)}
              className="w-full h-10 flex-shrink-0 bg-white my-4 outline outline-2 text-black font-medium rounded-md hover:bg-gray-100 transition-colors duration-200">
              Sign Up
            </button>
          ) : (
            <button
              onClick={(e) => signInWithEmail(e)}
              className="w-full h-10 flex-shrink-0 bg-white my-4 text-black outline outline-2 font-medium rounded-md hover:bg-gray-100 transition-colors">
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
            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full h-10 flex items-center gap-3 justify-center outline outline-2 bg-[#fefefe] hover:bg-gray-100 font-medium rounded-md  ">
              <img
                src={GoogleLogo}
                alt="Google Logo"
                className="inline-block"
                width={17}
                height={17}
              />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;

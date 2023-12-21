import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";
export const myAuthProvider = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);
  const googleLoginUser = () => {
    const googleProvider = new GoogleAuthProvider();
    isLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logoutUser =()=>{
    isLoading(true)
    return signOut(auth)
}
const loginUser = (email,password)=>{
    isLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      isLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const contextData = { user, loading, isLoading, googleLoginUser,logoutUser,loginUser };
  return (
    <myAuthProvider.Provider value={contextData}>
      {children}
    </myAuthProvider.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
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
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      isLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const contextData = { user, loading, isLoading, googleLoginUser,logoutUser };
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

import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  const gitHubLoginUser = () => {
    const gitHubProvider = new GithubAuthProvider();
    isLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const createUser = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, image) => {
    isLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const loginUser = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    isLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      isLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const contextData = {
    user,
    loading,
    isLoading,
    googleLoginUser,
    gitHubLoginUser,
    logoutUser,
    loginUser,
    createUser,
    updateUser,
  };
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

import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { myAuthProvider } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(myAuthProvider)
    if(loading){
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if(!user?.email){
        return <Navigate to="/sign-in"/>
    }
    return children
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };
export default PrivateRoute;
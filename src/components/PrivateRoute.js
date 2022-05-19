import {Navigate} from "react-router-dom";
import { useAuth } from '../context/Authcontext';

const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth();

return currentUser ? children : <Navigate to="/login"/>; 
};

export default PrivateRoute;
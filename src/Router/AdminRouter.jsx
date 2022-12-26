import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const AdminRouter = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(ContextProvider);
    const userType = localStorage.getItem('userRole');
    const location = useLocation();
    const from = location?.state?.from || '/';
    
    if(user && userType === "admin"){
        return children;
    }
    return navigate(from, {replace:true});
};

export default AdminRouter;
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const SellersPrivateRouter = ({children}) => {
    const {user} = useContext(ContextProvider)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from || '/';
    const userType = localStorage.getItem('userRole');
    

    if(user && userType === "Selling"){
        return children;
    }
    return navigate(from,{replace: true});
};

export default SellersPrivateRouter;
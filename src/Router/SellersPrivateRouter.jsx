import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const SellersPrivateRouter = ({children}) => {
    const {user, userData} = useContext(ContextProvider)
    const navigate = useNavigate()
    

    if(user && userData[0]?.role === "Selling"){
        return children;
    }
    return navigate('/');
};

export default SellersPrivateRouter;
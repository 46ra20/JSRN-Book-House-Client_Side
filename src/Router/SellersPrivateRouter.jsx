import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const SellersPrivateRouter = ({children}) => {
    const {user, isSeller} = useContext(ContextProvider)
    const navigate = useNavigate()
    
    console.log(isSeller);

    if(user && isSeller){
        return children;
    }
    return navigate('/');
};

export default SellersPrivateRouter;
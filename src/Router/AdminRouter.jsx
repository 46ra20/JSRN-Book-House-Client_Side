import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const AdminRouter = ({children}) => {
    const navigate = useNavigate()
    const {user, userData} = useContext(ContextProvider)
    
    if(user && userData[0]?.role === "admin"){
        return children;
    }
    return navigate('/')
};

export default AdminRouter;
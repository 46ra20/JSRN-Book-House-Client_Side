import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { ContextProvider } from '../UserContext/UserContext';

const SellersPrivateRouter = (children) => {
    const {user} = useContext(ContextProvider)
    const navigate = useNavigate()
    const {isLoading, data} = useQuery({
        queryKey:('sellerData'),
        queryFn:()=> fetch(`http://localhost:5000/user?email=${user?.email}`).then((res)=> res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    
    if(user && data[0]?.userRole === 'Selling'){
        return children;
    }
    return navigate('/');
};

export default SellersPrivateRouter;
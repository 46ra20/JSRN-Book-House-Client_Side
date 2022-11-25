import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { ContextProvider } from '../UserContext/UserContext';

const AdminRouter = () => {
    const {user} = useContext(ContextProvider)
    const navigate = useNavigate()
    const {isLoading, data} = useQuery({
        queryKey:('sellerData'),
        queryFn:()=> fetch(`http://localhost:5000/user?email=${user?.email}`).then((res)=> res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    
    if(user && data[0]?.adminRole === true){
        return children;
    }
    return navigate('/');
};
};

export default AdminRouter;
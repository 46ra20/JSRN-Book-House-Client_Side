import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { ContextProvider } from '../UserContext/UserContext';

const AdminRouter = ({children}) => {
    const {user, setIsAdmin} = useContext(ContextProvider)
    const navigate = useNavigate()
    const {isLoading, data} = useQuery({
        queryKey:('sellerData'),
        queryFn:()=> fetch(`http://localhost:5000/user?email=${user?.email}`).then((res)=> res.json())
    })
    console.log(data)
    if(isLoading){
        return <Loading></Loading>
    }
    
    if(user && data[0]?.adminRole === true){
        setIsAdmin(true)
        return children;
    }
    return navigate('/');
};

export default AdminRouter;
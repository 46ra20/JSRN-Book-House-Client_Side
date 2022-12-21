import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../Components/Loading/Loading';
import { toast } from 'react-hot-toast';


const AllBuyers = () => {
    const [getBuyers, setGetBuyers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // get data axios
    async function getUser() {
        
        try {
            const response = await axios.get('https://b612-used-products-resale-server-side-46ra20-main.vercel.app/all-buyers');
            setGetBuyers(response.data);
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    getUser().catch(err=> console.log(err))

    if(isLoading){
        return <Loading></Loading>
    }

    const handleDelete = (id) =>{  
        fetch(`https://b612-used-products-resale-server-side-46ra20-main.vercel.app/delete-user/?id=${id}`,
    {
        method:"delete"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deleteCount>0){
            toast.success("User Delete Successfully.")
        }
    })        
    }

    return (
        <>  
        <div className={`${getBuyers.length<1?"":"hidden"}`}>
            <p className='text-3xl text-center my-10'>No Buyer yet sign up....</p>
        </div>
            <div className={`container mx-auto my-8 ${getBuyers.length>0?'':'hidden'}`}>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getBuyers.map((buyer, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.userName}</td>
                                <td>{buyer.userEmail}</td>
                                <td>
                                    <button className="btn btn-circle btn-outline btn-error" onClick={()=>handleDelete(buyer._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AllBuyers;
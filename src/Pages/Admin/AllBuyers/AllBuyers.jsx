import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { deleteUser } from '../DeleteUser/DeleteUser';
import { Toaster } from 'react-hot-toast';


const AllBuyers = () => {
    const [getBuyers, setGetBuyers] = useState([])

    // get data axios
    async function getUser() {
        try {
            const response = await axios.get(' https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/all-buyers',{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setGetBuyers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    getUser().catch(err=> console.log(err))

    if(getBuyers.length<1){
        return <h2 className='text-3xl font-semibold text-center my-10'>Ho NO !! No Buyer ...</h2>
        
    }

    const handleDelete = (id) =>{
        deleteUser(id)
    }

    return (
        <div className='container mx-auto my-8'>
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
            <Toaster></Toaster>
        </div>
    );
};

export default AllBuyers;
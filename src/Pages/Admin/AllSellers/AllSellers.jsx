import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';

const AllSellers = () => {

    const { isLoading, data,refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://b612-used-products-resale-server-side-46ra20-main.vercel.app/all-sellers').then(res =>
                res.json()
            )
    })

    //seller delete
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
                refetch();
            }
        })  
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className={`${data.length<1?"":"hidden"}`}>
                <p className='text-3xl text-center my-12'>No Seller yet sign up.</p>
            </div>
            <div className={`container mx-auto my-8 ${data.length>0?"":"hidden"}`}>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((seller, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller.userName}</td>
                                <td>
                                    {
                                        seller.isVerify ?
                                            <button className='btn-success'>Verified</button>
                                            :
                                            <button className='btn btn-ghost'>Unverified</button>
                                    }

                                </td>
                                <td>
                                    <button className="btn btn-circle btn-outline btn-error" onClick={()=>handleDelete(seller._id)}>
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

export default AllSellers;
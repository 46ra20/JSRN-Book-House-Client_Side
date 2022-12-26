import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../Components/Loading/Loading';
import { deleteUser } from '../DeleteUser/DeleteUser';


const AllSellers = () => {

    const { isLoading, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(' https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/all-sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res =>
                res.json()
            )
    })

    //seller delete
    const handleDelete = (id) => {
        deleteUser(id)
        toast.success('Seller Delete Successfully.');
        refetch();
    }

//verify seller
const handleVerify = (id) => {
    fetch(`https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/verify-seller/?id=${id}`, {
        method: 'put'
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifyCount > 0) {
                toast.success('User verified');
                refetch();
            }
        })

}

if (isLoading) {
    return <Loading></Loading>
}
if (data.length < 1) {
    return <h2 className='text-3xl text-center font-semibold my-8'>Sorry No seller available</h2>
}

return (
    <div className='container mx-auto my-8'>
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
                                    seller.isVerify === "true" ?
                                        <button className='btn btn-success'>Verified</button>
                                        :
                                        <button className='btn btn-ghost' onClick={() => handleVerify(seller._id)}>Unverified</button>
                                }

                            </td>
                            <td>
                                <button className="btn btn-circle btn-outline btn-error" onClick={() => handleDelete(seller._id)}>
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

export default AllSellers;
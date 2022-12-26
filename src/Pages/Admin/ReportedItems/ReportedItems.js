import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';
import Loading from '../../../Components/Loading/Loading';

const ReportedItems = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch("https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/reported-product").then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDelete = (id) => {
        fetch(` https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/delete-reported-product/?id=${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    refetch();
                    toast.success('Product delete Successfully.');
                }
            })
    }
    return (
        <div className='container mx-auto my-8'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td className='flex items-center'>
                                    <img src={product.imgUrl} alt="" className='w-10 h-14 rounded' />
                                    <p className='text-xl font-semibold ml-3'>{product.productName}</p>
                                </td>
                                <td className='text-xl'>{product.categoryId}</td>
                                <td className='text-xl'>{product.price}$</td>
                                <td>
                                    <button className="btn btn-error btn-circle btn-outline" data-tip="Delete Your Product" onClick={() => handleDelete(product._id)} disabled={product.isAlliable !== "true"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ReactTooltip />
        </div>
    );
};

export default ReportedItems;
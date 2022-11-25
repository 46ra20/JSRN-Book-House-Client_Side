import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';
import Loading from '../../../Components/Loading/Loading';
import ReactTooltip from 'react-tooltip';


const AllProduct = () => {
    const { user } = useContext(ContextProvider)

    const { isLoading, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/product-by-user?email=${user.email}`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    //delete available product
    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div className='container mx-auto my-8'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product, i) => <tr>
                                <th>{i + 1}</th>
                                <td className='flex items-center'>
                                    <img src={product.imgUrl} alt="" className='w-10 h-14 rounded' />
                                    <p className='text-xl font-semibold ml-3'>{product.productName}</p>
                                </td>
                                <td className='text-xl'>{product.categoryId}</td>
                                <td className='text-xl'>{product.price}$</td>
                                <td className='text-xl'>
                                    {
                                        product.isAlliable === "true" ?
                                            <button className='btn btn-success' data-tip="You can add your product to advertise for quick sell">Available</button>
                                            :
                                            <button className='btn btn-disabled w-1/2'>Sold</button>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-success btn-circle btn-outline" disabled={product.isAlliable !== "true"}>
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

export default AllProduct;
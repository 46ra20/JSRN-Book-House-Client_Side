import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import Loading from '../../../Components/Loading/Loading';
import { ContextProvider } from '../../../UserContext/UserContext';

const MyOrders = () => {
    const { user } = useContext(ContextProvider);

    const { isLoading, data, isError } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/my-product?email=${user.email}`,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res =>
                res.json()
            )
    })
    console.log(data)
    if (isLoading) {
        return <Loading></Loading>
    }

    if (isError) {
        return <h1 className='text-center my-10 text-3xl font-bold'>You Have No Order Please Buy Something...</h1>
    }

    return (
        <div className='container mx-auto my-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(order =>
                                <tr key={order._id} className='text-xl'>
                                    <th>1</th>
                                    <td className='flex items-center'>
                                        <img src={order.imgUrl} className='w-10 h-14 rounded' alt="" />
                                        <p className='ml-3'>{order.productName}</p>
                                    </td>
                                    <td>{order.price}$</td>
                                    <td>
                                        {
                                            order.isPaid === "true" ?
                                                <p>Paid</p> :
                                                <button className='btn btn-success'>Pay</button>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
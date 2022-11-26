import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';

const MyOrders = () => {
    const { user } = useContext(ContextProvider);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my-product?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

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
                            orders.map(order =>
                                <tr key={order._id} className='text-xl'>
                                    <th>1</th>
                                    <td className='flex items-center'>
                                        <img src={order.imgUrl} className='w-10 h-14 rounded' alt="" />
                                        <p className='ml-3'>{order.productName}</p>
                                    </td>
                                    <td>{order.price}$</td>
                                    <td>
                                        {
                                            order.isPaid === "true"?
                                            <p>Paid</p>:
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
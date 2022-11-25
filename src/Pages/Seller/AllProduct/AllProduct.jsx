import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';

const AllProduct = () => {
    const { user } = useContext(ContextProvider)
    // const {data, isError, refetch} = useQuery({
    //     queryKey:['allProductByUser'],
    //     queryFn:()=>{
    //         fetch(`http://localhost:5000/product-by-user?email=sell@gmail.com`).then(res=> res.json())
    //     }
    // })

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/product-by-user?email=sell@gmail.com').then(res =>
                res.json()
            )
    })

    console.log(data)
    return (
        <div className='container mx-auto my-8'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product, i) => <tr>
                                <th>{i+1}</th>
                                <td className='flex items-center'>
                                    <img src={product.imgUrl} alt="" className='w-10 h-14 rounded' />
                                    <p className='text-xl font-semibold ml-3'>{product.productName}</p>
                                </td>
                                <td>{product.categoryId}</td>
                                <td>Blue</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProduct;
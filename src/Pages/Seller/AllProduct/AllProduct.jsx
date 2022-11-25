import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';
import Loading  from '../../../Components/Loading/Loading';
import { AiFillDelete } from 'react-icons/ai'

const AllProduct = () => {
    const { user } = useContext(ContextProvider)
    
    const { isLoading, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/product-by-user?email=${user.email}`).then(res =>
                res.json()
            )
    })

    if(isLoading){
        return <Loading></Loading>
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
                            <th>Action</th>
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
                                <td className='text-xl'>{product.categoryId}</td>
                                <td>
                                    <p className='bg-red-200 inline-block p-2 rounded-full hover:bg-red-300'><AiFillDelete className=' text-2xl text-red-600 rounded-full'></AiFillDelete></p>
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

export default AllProduct;
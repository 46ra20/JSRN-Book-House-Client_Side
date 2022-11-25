import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LoadDataByCategory = () => {
    const getProducts = useLoaderData();
    const currentYear = new Date().getFullYear();
    return (
        <div className='container mx-auto my-8'>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                {
                    getProducts.map(product =>
                        //product in card
                        <div className="card lg:card-side bg-base-100 shadow-xl" key={product._id}>
                            <figure><img src={product.imgUrl} alt="book" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.productName}
                                </h2>

                                <p>Location: {product.location}</p>
                                <p>Resell Price: {product.price}$</p>
                                <p>Use:
                                    {currentYear - parseInt(product.yearOfPurchase)}
                                    {`${currentYear - parseInt(product.yearOfPurchase) > 1 ? ' years' : ' year'}`}
                                </p>
                                <p>Posted Date: {product.entryDate}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button */}
            </div>
        </div>
    );
};

export default LoadDataByCategory;
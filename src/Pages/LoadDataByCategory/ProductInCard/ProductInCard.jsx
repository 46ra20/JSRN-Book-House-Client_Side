import React from "react";
import { GoUnverified, GoVerified } from 'react-icons/go';
import ReactTooltip from "react-tooltip";
import {MdReport} from 'react-icons/md'

const ProductInCard = ({ product, handleModal, currentYear,handleReport }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:h-96" key={product._id}>
            <figure><img src={product.imgUrl} alt="book" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.productName}
                </h2>
                <h4 className='flex items-center'>
                    Seller Name: <span className='font-semibold'> {product.userName}</span>
                    {
                        product.isUserVerify === "true"
                            ?
                            <GoVerified className='text-success ml-2' data-tip="Seller is verified"></GoVerified>
                            :
                            <GoUnverified className='ml-2' data-tip="Seller is not verified"></GoUnverified>
                    }
                </h4>

                <p>Location: <span className='font-semibold'>{product.location}</span></p>
                <p>Resell Price: <span className='font-semibold'>{product.price}$</span></p>
                <p>Original Price: <span className='font-semibold'>{product.originalPrice} $</span></p>
                <p>Use:
                    <span className='font-semibold'>
                        {currentYear - parseInt(product.yearOfPurchase)}
                        {`${currentYear - parseInt(product.yearOfPurchase) > 1 ? ' years' : ' year'}`}
                    </span>
                </p>
                <p>Posted Date: <span className='font-semibold'>{product.entryDate}</span></p>
                <div className="card-actions justify-end items-center">
                    {/* <button className="">Book Now</button> */}
                    <label htmlFor="bookingModal" className="btn btn-success shadow-xl btn-outline" onClick={() => handleModal(product)}>Book Now</label>
                    <button data-tip="Report to admin." onClick={()=>handleReport(product._id)}>
                        <p className="p-3 rounded-full bg-base-200 hover:bg-base-300"><MdReport className="text-xl"></MdReport></p>
                    </button>
                </div>
            </div>
            <ReactTooltip></ReactTooltip>
        </div>
    );
}

export default ProductInCard;
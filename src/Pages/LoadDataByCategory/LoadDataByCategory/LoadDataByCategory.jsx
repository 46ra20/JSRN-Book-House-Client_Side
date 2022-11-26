import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoUnverified, GoVerified } from 'react-icons/go'
import ReactTooltip from 'react-tooltip';
import BookingModal from '../../Buyer/BookingModal/BookingModal';
import { useContext } from 'react';
import { ContextProvider } from '../../../UserContext/UserContext';

const LoadDataByCategory = () => {
    //state for modal
    const [modalInformation, setModalInformation] = useState({})
    const [openModal, setOpenModal] = useState(true)
    //get current user data
    const { user } = useContext(ContextProvider)

    const getProducts = useLoaderData();
    const currentYear = new Date().getFullYear();
    if (getProducts.length < 1) {
        return <h2 className='text-3xl font-semibold text-center my-8'>No Data Found in this category</h2>
    }

    //set modal information
    const handleModal = (information) => {
        const relativeInfo = { "itemName": information.productName, "userEmail": user.email, "currentPrice": information.price }
        setOpenModal(true)
        setModalInformation(relativeInfo);
    }

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
                                <h4 className='flex items-center'>
                                    Seller Name: <span className='font-semibold'> {product.userName}</span>
                                    {
                                        product.isUserVerify === "false"
                                            ?
                                            <GoUnverified className='ml-2' data-tip="Seller is not verified"></GoUnverified>
                                            :
                                            <GoVerified className='text-success ml-2' data-tip="Seller is verified"></GoVerified>
                                    }
                                </h4>

                                <p>Location: <span className='font-semibold'>{product.location}</span></p>
                                <p>Resell Price: <span className='font-semibold'>{product.price}$</span></p>
                                <p>Original Price: <span className='font-semibold'>{product.originalPrice}</span></p>
                                <p>Use:
                                    <span className='font-semibold'>
                                        {currentYear - parseInt(product.yearOfPurchase)}
                                        {`${currentYear - parseInt(product.yearOfPurchase) > 1 ? ' years' : ' year'}`}
                                    </span>
                                </p>
                                <p>Posted Date: <span className='font-semibold'>{product.entryDate}</span></p>
                                <div className="card-actions justify-end">
                                    {/* <button className="">Book Now</button> */}
                                    <label htmlFor="bookingModal" className="btn btn-success shadow-xl btn-outline" onClick={() => handleModal(product)}>Book Now</label>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button */}
            </div>
            {/* booking modal */}
            {
                openModal && <BookingModal modalInformation={modalInformation} setOpenModal={setOpenModal}></BookingModal>
            }
            <ReactTooltip></ReactTooltip>
        </div>
    );
};

export default LoadDataByCategory;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import BookingModal from '../../../Buyer/BookingModal/BookingModal';
import { useContext } from 'react';
import { ContextProvider } from '../../../../UserContext/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import ProductInCard from '../../ProductInCard/ProductInCard'

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
        const relativeInfo = { "itemName": information.productName, "productId": information._id, "userEmail": user.email, "currentPrice": information.price }
        setOpenModal(true)
        setModalInformation(relativeInfo);
    }

    const updateProductStatus = (relativeInfo) => {
        fetch(' https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/update-product-status', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(relativeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Congratulation You Booked is Successful !!!')
                }
            })
    }

    const handleReport = (id) => {
        fetch(`https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/report-to-admin/?id=${id}`, {
            method: 'put'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Reported to admin.');
                }
            })
    }

    return (
        <div className='container mx-auto my-8'>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                {
                    getProducts.map(product => <ProductInCard
                        handleReport={handleReport}
                        product={product}
                        handleModal={handleModal}
                        key={product._id}
                        currentYear={currentYear}
                    ></ProductInCard>)
                }
                {/* original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button */}
            </div>
            {/* booking modal */}
            {
                openModal && <BookingModal modalInformation={modalInformation} setOpenModal={setOpenModal} updateProductStatus={updateProductStatus} ></BookingModal>
            }
            <ReactTooltip></ReactTooltip>
            <Toaster></Toaster>
        </div>
    );
};

export default LoadDataByCategory;
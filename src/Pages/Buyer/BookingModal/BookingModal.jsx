import React from 'react';


const BookingModal = ({ modalInformation, setOpenModal }) => {
    

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const buyerEmail = form.buyerEmail.value;
        const buyerPhone = form.buyerPhone.value;
        const meetingLocation = form.meetingLocation.value;

        console.log(buyerEmail, buyerPhone, meetingLocation)
        setOpenModal(false)
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="modal-box relative mx-auto">
                        <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{modalInformation.itemName}</h3>
                        <div className='flex justify-between'>
                            <label htmlFor='price' className='font-semibold'>Price:</label>
                            <input type="text" id='price' className='input input-bordered input-sm w-1/2' value={`${modalInformation.currentPrice} $`}  readOnly />
                        </div>
                        <div className='flex justify-between my-2'>
                            <label htmlFor='currentUser' className='font-semibold'>Email:</label>
                            <input type="text" id='currentUser' className='input input-bordered input-sm w-1/2' value={`${modalInformation.userEmail}`} name='buyerEmail' readOnly />
                        </div>
                        <div className='flex justify-between my-2'>
                            <label htmlFor='phoneNumber' className='font-semibold'>Phone Number:</label>
                            <input type="text" id='phoneNumber' name='buyerPhone' className='input input-bordered input-sm w-1/2' placeholder='01XXX-XXXXXX' required/>
                        </div>
                        <div className='flex justify-between my-2'>
                            <label htmlFor='meetingLocation' className='font-semibold'>Meeting Location:</label>
                            <input type="text" id='meetingLocation' name='meetingLocation' className='input input-bordered input-sm w-1/2' placeholder='ex- Dhaka' required />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-success w-full'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
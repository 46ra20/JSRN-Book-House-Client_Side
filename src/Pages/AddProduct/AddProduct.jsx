import React from 'react';


const AddProduct = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productThumbnail = form.productThumbnail.files;

    }
    
    return (
        <div className='w-96 mx-auto my-5'>
            <h2 className='divider text-3xl font-semibold'>Add A Product</h2>
            <form className='border p-8 rounded shadow' onSubmit={handleSubmit}>
                <div className='mt-3'>
                    <label>Product Name</label>
                    <input className='input input-sm input-bordered input-success w-full' name='productName'></input>
                </div>
                <div className='mt-3'>
                    <label>Product Thumbnail</label>
                    <input  type="file" className="file-input file-input-bordered file-input-success w-full  file-input-sm" name='productThumbnail' required/>
                </div>
                <div className='mt-3'>
                    <label>Price</label>
                    <input className='input input-sm input-bordered input-success w-full' name='price' required></input>
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <label className='font-semibold'>Condition?</label>
                    <select name='condition' className='select select-sm select-success select-bordered' required>
                        <option>Please Select one</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label>Mobile Number</label>
                    <input className='input input-sm input-bordered input-success w-full' name='mobileNumber'></input>
                </div>
                <div className='mt-3'>
                    <label>Location</label>
                    <input  className='input input-sm input-bordered input-success w-full' name='location' required></input>
                </div>
                <div className='mt-3'>
                    <label>Description</label>
                    <textarea className='textarea textarea-sm textarea-bordered textarea-success w-full' name='description' required></textarea>
                </div>
                <div className='mt-3'>
                    <label>Year of purchase</label>
                    <input className='input input-sm input-bordered input-success w-full' name='yearOfPurchase'></input>
                </div>
                <div className='my-3'>
                    <button  className='btn btn-success w-full '>Add Your Product</button>
                </div>
            </form>
        </div>
    );
};
// On the " Add A Product" route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page
export default AddProduct;
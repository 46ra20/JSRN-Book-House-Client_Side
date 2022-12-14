import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../../../UserContext/UserContext";

const AddProduct = () => {
  const { user, userData } = useContext(ContextProvider);
  const [catagories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  //date
  const date = new Date();

  //redirect seller into all product page
  const navigate = useNavigate();

  //collect data from user form
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const productThumbnail = form.productThumbnail.files[0];
    const price = form.price.value;
    const originalPrice = form.originalPrice.value;
    const condition = form.condition.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.location.value;
    const description = form.description.value;
    const yearOfPurchase = form.yearOfPurchase.value;

    //upload image in ibb
    const fromData = new FormData();
    fromData.append("image", productThumbnail);

    fetch(
      "https://api.imgbb.com/1/upload?key=845e5be1d5f228d868554f534bfa6afd",
      {
        method: "POST",
        body: fromData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const imgUrl = data?.data?.display_url;

        const addedProduct = {
          userData,
          userEmail: user.email,
          isAlliable: "true",
          entryDate: date.toLocaleDateString(),
          categoryId: categoryId,
          productName: productName,
          imgUrl: imgUrl,
          price: price,
          originalPrice: originalPrice,
          condition: condition,
          mobileNumber: mobileNumber,
          location: location,
          description: description,
          yearOfPurchase: yearOfPurchase,
        };

        saveProduct(addedProduct);
        form.reset();
      });
  };

  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-46ra20-main.vercel.app/productCategories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setCategoryId(value);
  };

  //send data for save

  const saveProduct = (productDetails) => {
    fetch(
      "https://b612-used-products-resale-server-side-46ra20-main.vercel.app/addProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your Product Added Successfully.", {
            duration: "200",
          });
          navigate("/dashboard/my-product");
        }
      });
  };

  return (
    <div className="mx-auto my-5">
      <h2 className="divider text-3xl font-semibold">Add A Product</h2>
      <form className="border p-8 rounded shadow" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-6">
          <div>
            <div className="mt-3">
              <label className="font-semibold w-full">Product Name</label>
              <input
                className="input input-sm input-bordered input-success w-full"
                name="productName"
                placeholder="Product Name"
                required
              ></input>
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Product Thumbnail</label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-success w-full  file-input-sm"
                name="productThumbnail"
                required
              />
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Current Price</label>
              <input
                type={'number'}
                className="input input-sm input-bordered input-success w-full"
                name="price"
                placeholder="10"
                required
              ></input>
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Original Price</label>
              <input
                type={'number'}
                className="input input-sm input-bordered input-success w-full"
                name="originalPrice"
                placeholder="23"
                required
              ></input>
            </div>
            <div className="mt-3">
              <label htmlFor="category" className="font-semibold w-full">
                Please Select a category:{" "}
              </label>
              <select
                name=""
                className="select select-sm select-bordered select-success w-full"
                id="category"
                onChange={handleOnChange}
                required={categoryId === ""}
              >
                <option disabled>Please Select one</option>
                {catagories?.map((category) => (
                  <option key={category._id}>{category.categoryName}</option>
                ))}
              </select>
            </div>
            
          </div>
          <div>
          <div className="mt-3 ">
              <label className="font-semibold w-full">Condition?</label>
              <select
                name="condition"
                className="select select-sm select-success select-bordered w-full"
                required
              >
                <option disabled>Please Select one</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Mobile Number</label>
              <input
                type={'text'}
                className="input input-sm input-bordered input-success w-full"
                name="mobileNumber"
                placeholder="015XX-XXXXXX"
                pattern='[0-9]{11}'
              ></input>
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Location</label>
              <input
                className="input input-sm input-bordered input-success w-full"
                name="location"
                placeholder="Your Location"
                required
              ></input>
            </div>
            
            <div className="mt-3">
              <label className="font-semibold w-full">Year of purchase</label>
              <input
                type={'text'}
                pattern="[0-9]{4}"
                className="input input-sm input-bordered input-success w-full"
                placeholder="2022"
                name="yearOfPurchase"
              ></input>
            </div>
            <div className="mt-3">
              <label className="font-semibold w-full">Description</label>
              <textarea
                className="textarea textarea-sm textarea-bordered textarea-success w-full"
                name="description"
                placeholder="Your item description"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="my-3">
          <button className="btn btn-success w-full ">Add Your Product</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;

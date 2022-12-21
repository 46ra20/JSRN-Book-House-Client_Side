import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../UserContext/UserContext";
import Loading from "../../../Components/Loading/Loading";
import ReactTooltip from "react-tooltip";
import { toast } from "react-hot-toast";

const AllProduct = () => {
  const { user } = useContext(ContextProvider);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://b612-used-products-resale-server-side-46ra20-main.vercel.app/product-by-user?email=${user.email}`
      ).then((res) => res.json()),
  });

  //delete available product
  const handleDelete = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-46ra20-main.vercel.app/delete-product-bySeller?id=${id}`,
      {
        method: "DELETE",
      }
    )
    .then(res=>res.json())
    .then(data=>{
      refetch();
      if(data.deleteCount>0){
        toast.success("Your Product delete successfully.")
      }
    })
  };

  const handleShowInAddSection = (id) =>{
    fetch(`https://b612-used-products-resale-server-side-46ra20-main.vercel.app/add-your-product-in-advertise-section/?id=${id}`,{
        method:'put'
    })
    .then(res=>res.json())
    .then(data => {
        if(data.modifiedCount>0){
            toast.success("Your item successfully in advertise section.")
        }
    })
  }

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className={`${data.length < 1? "":"hidden"}`}>
        <p className="text-3xl text-center my-10">Please add an item.{data.length}</p>
      </div>
      <div className={`container mx-auto my-8 ${data.length > 0?"":"hidden"}`}>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="flex items-center">
                    <img
                      src={product.imgUrl}
                      alt=""
                      className="w-10 h-14 rounded"
                    />
                    <p className="text-xl font-semibold ml-3">
                      {product.productName}
                    </p>
                  </td>
                  <td className="text-xl">{product.categoryId}</td>
                  <td className="text-xl">{product.price}$</td>
                  <td className="text-xl">
                    {product.isAlliable === "true" ? (
                      <button
                        onClick={()=>handleShowInAddSection(product._id)}
                        className="btn btn-success block mx-auto"
                        data-tip="You can add your product to advertise for quick sell"
                      >
                        Available
                      </button>
                    ) : (
                      <button className="btn btn-disabled block w-4/5 mx-auto">
                        Sold
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-error btn-circle btn-outline"
                      data-tip="Delete Your Product"
                      onClick={() => handleDelete(product._id)}
                      disabled={product.isAlliable !== "true"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactTooltip />
      </div>
    </>
  );
};

export default AllProduct;

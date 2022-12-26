import React from "react";

const AdvertisedCard = ({card}) => {
    const {imgUrl,productName, description} = card;
  return (
    <div className="card bg-gray-50 shadow-xl h-full mx-3 md:mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={imgUrl}
          alt="Shoes"
          className="rounded-xl w-32 h-40"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>{description?.slice(0,80)} ...</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;

import React from "react";

const HotelCart = ({ hotel }) => {
  return (
    <div className="md:flex justify-evenly border-b pb-2 border-orange-300">
      <div className="md:w-100">
        <img
          className="md:w-96 md:h-96 object-fill rounded-2xl"
          src={hotel.image}
          alt="a"
        />
      </div>
      <div className="flex md:w-100 flex-col ">
        <h1 className="text-2xl">Information about the hotel</h1>
        <div className="bg-orange-500 text-white p-5 text-lg rounded-xl gap-5">
          <h1>
            Hotel Name: <strong>{hotel.name}</strong>
          </h1>
          <h1>
            Room Count: <strong>{hotel.roomCount}</strong>
          </h1>
          <h1>
            Latitude:<strong>{hotel.latitude}</strong>
          </h1>
          <h1>
            Longitude:<strong>{hotel.longitude}</strong>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HotelCart;

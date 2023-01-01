import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCart from "../../components/hotelCart/HotelCart";
import Loading from "../../components/loading/Loading";
import { fetchHotels, getHotels } from "../../redux/slices/HotelSlice";

const Dashboard = () => {
  const { hotels, isLoading, isError } = useSelector(getHotels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
  }, [hotels]);

  console.log(hotels, "hotelllsss");
  if (isError) return <div>error</div>;
  return (
    <Loading isLoading={isLoading}>
      <div className="flex flex-col p-3">
        <div className="p-5 flex bg-white rounded-lg flex-col drop-shadow-xl">
          <h1 className="text-xl">Hotels</h1>
          <div className="flex flex-col gap-11 flex-wrap mt-5">
            {!isLoading &&
              hotels &&
              hotels.map((hotel) => {
                return (
                  <div key={hotel.id}>
                    <HotelCart hotel={hotel} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default Dashboard;

import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deteleItem } from "../../redux/slices/ItemSlice";
const ItemCart = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItems = () => {
    dispatch(deteleItem(item.id));
    toast.error("Item deleted");
  };

  return (
    <div className="flex bg-white drop-shadow-xl flex-col p-4 rounded-xl md:w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-sm items-center">
          <p className="bg-orange-100 rounded-xl text-xs px-1 py-1">
            {(item.stock && "In Stock") || "No Stock"}
          </p>
          <p>523pcs</p>
        </div>
        <FaTrash className="cursor-pointer" onClick={deleteItems} />
      </div>
      <div className="flex items-center mt-4 ">
        <img
          className="w-20 h-20 object-contain border rounded-xl mr-2"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col w-60 border-r border-orange-500">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div className="flex flex-col items-center ml-1">
          <p>Price </p>
          <p>{item.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

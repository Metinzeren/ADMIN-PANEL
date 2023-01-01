import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../../redux/slices/ItemSlice";
import "./Modal.css";
const Modal = ({ open, onClose }) => {
  const [itemler, setItemler] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    description: "",
    category: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addAnItem = () => {
    dispatch(addItem(itemler));
    toast.success("Item added");
    navigate("/items");
  };
  if (!open) return null;
  return (
    <div>
      <div onClick={onClose} className="overlay_style"></div>
      <div className="modal_style">
        {/* <button className="" onClick={onClose}>
          Close
        </button> */}
        <div className="flex flex-col">
          <h1 className="text-2xl text-orange-500 flex justify-center mb-2">
            ADD AN ITEM
          </h1>
          <div className="modal-inputs">
            <input
              onChange={(e) => setItemler({ ...itemler, name: e.target.value })}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) =>
                setItemler({ ...itemler, price: e.target.value })
              }
              type="number"
              placeholder="Price"
            />
            <select
              onChange={(e) =>
                setItemler({ ...itemler, stock: e.target.value })
              }
            >
              <option>Select Stock</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
            <input
              onChange={(e) =>
                setItemler({ ...itemler, image: e.target.value })
              }
              type="text"
              placeholder="Image"
            />
            <input
              onChange={(e) =>
                setItemler({ ...itemler, description: e.target.value })
              }
              type="text"
              placeholder="Description"
            />
            <input
              onChange={(e) =>
                setItemler({ ...itemler, category: e.target.value })
              }
              type="text"
              placeholder="Category"
            />
          </div>
          <button
            onClick={addAnItem}
            className="mt-2 bg-orange-500 text-lg font-bold  text-white rounded-xl p-2 hover:bg-orange-600 "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/addItemModal/Modal";
import ItemCart from "../../components/itemCart/ItemCart";
import Loading from "../../components/loading/Loading";
import { fetchItemSub, getItems } from "../../redux/slices/ItemSlice";
const Items = () => {
  const { items, isLoading, isError } = useSelector(getItems);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterItems, setFilterItems] = useState("All");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemSub());
  }, []);
  console.log(items, "items");
  const filterItem = [
    {
      category: "All",
    },
    {
      category: "Snack",
    },
    {
      category: "Drink",
    },
  ];
  const categoryFilter = () => {
    return items.items.filter((y) => {
      if (filterItems !== "All") {
        if (y.category === filterItems) {
          if (searchText.length !== 0) {
            if (y.name.includes(searchText)) {
              return y;
            }
          } else {
            return y;
          }
        }
      } else {
        if (searchText.length !== 0) {
          if (y.name.toLowerCase().includes(searchText.toLowerCase())) {
            return y;
          }
        } else {
          return y;
        }
      }
    });
  };
  if (isError) return <div>error</div>;
  return (
    <Loading isLoading={isLoading}>
      {/* MODAL KISMI */}
      <Modal onClose={() => setModalIsOpen(false)} open={modalIsOpen} />
      {/* MODAL KISMI */}
      <div className="flex flex-col p-3 ">
        <div className="p-5 flex bg-white rounded-t-lg drop-shadow-xl justify-between items-center">
          <h1 className="text-xl">Items</h1>
          <div className="flex">
            <div className="input-area relative mr-3">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="p-1 rounded-xl border-2"
                placeholder="Search"
              />
              <div className="cursor-pointer input-icon absolute top-2 right-1">
                <FaSearch />
              </div>
            </div>
            <button
              onClick={() => setModalIsOpen(!modalIsOpen)}
              className="px-3 border md:text-m rounded-xl hover:bg-orange-500 hover:text-white duration-200"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="bg-orange-500 p-5 justify-between drop-shadow-xl rounded-b-lg  flex items-center gap-3">
          <div className="gap-3 flex">
            {filterItem.map((item, i) => {
              return (
                <div key={i}>
                  <button
                    onClick={() => {
                      if (filterItems === item.category) {
                        setFilterItems("All");
                      } else {
                        setFilterItems(item.category);
                      }
                    }}
                    className="active:bg-violet-700 border-none duration-300 rounded-xl px-3 text-sm bg-white hover:text-orange-500"
                  >
                    {item.category}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="text-white">Filter Items</p>
        </div>
        <div className="flex gap-8 flex-wrap mt-5">
          {!isLoading &&
            items.items &&
            categoryFilter().map((item) => {
              return (
                <div key={item.id}>
                  <ItemCart item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </Loading>
  );
};

export default Items;

import React from "react";
import { Link } from "react-router-dom";
import { FaFortAwesomeAlt } from "react-icons/fa";
const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/items",
      name: "Items",
    },
  ];
  return (
    <div className="md:flex">
      <div className="flex-col bg-orange-500  md:min-h-screen">
        <div className="flex items-center justify-center p-6">
          <h1 className="text-3xl text-white">ADMIN</h1>
          <div className="ml-2 text-2xl text-white">
            <FaFortAwesomeAlt />
          </div>
        </div>
        {menuItem.map((item, i) => {
          return (
            <div key={i} className="pl-3">
              <Link className="text-white text-lg" to={item.path}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <main className="w-full bg-slate-100  p-3">{children}</main>
    </div>
  );
};

export default Sidebar;

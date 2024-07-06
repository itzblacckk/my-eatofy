"use client"
import React, { useState } from 'react';
import {
  FaHotel, FaCog, FaHistory, FaUsers, FaTrashAlt, FaBomb,
  FaClipboardList, FaChartLine, FaBoxOpen, FaRegBell, FaMoneyCheckAlt,
  FaTruck, FaChair, FaUserClock, FaCalendarCheck, FaListAlt
} from 'react-icons/fa';
interface MenuItem {
  name: string;
  icon: JSX.Element;
}

const EatofyApp: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const menuItems: MenuItem[] = [
    { name: 'Hotel Management', icon: <FaHotel /> },
    { name: 'Setting', icon: <FaCog /> },
    { name: 'Order History', icon: <FaHistory /> },
    { name: 'CRM Management', icon: <FaUsers /> },
    { name: 'Expired Stock', icon: <FaTrashAlt /> },
    { name: 'Damage Stock', icon: <FaBomb /> },
    { name: 'Menu Management', icon: <FaClipboardList /> },
    { name: 'Report', icon: <FaChartLine /> },
    { name: 'Inventory', icon: <FaBoxOpen /> },
    { name: 'Subscribe Management', icon: <FaRegBell /> },
    { name: 'Expenses Management', icon: <FaMoneyCheckAlt /> },
    { name: 'Supplier Management', icon: <FaTruck /> },
    { name: 'Table Management', icon: <FaChair /> },
    { name: 'Staff Scheduling', icon: <FaUserClock /> },
    { name: 'Event Booking', icon: <FaCalendarCheck /> },
    { name: 'Order Management', icon: <FaListAlt /> },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-screen h-screen p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-red-500 text-2xl font-bold">EATOFY</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for food, coffee, etc..."
              className="border border-zinc-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer ${
                activeIndex === index ? 'bg-red-500 text-white' : 'bg-white text-zinc-700 border-red-500'
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="w-12 h-12 mb-2 text-3xl">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatofyApp;

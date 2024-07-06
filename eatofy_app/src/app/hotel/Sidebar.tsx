import React from 'react';
import { FaHome, FaFileInvoice, FaSignOutAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black text-red-500 p-4 flex flex-col items-center space-y-8">
    <div className="p-2">
      <img src="/logo.png" alt="icon1" />
    </div>
    <div className="p-2">
      <img src="https://placehold.co/40x40" alt="icon2" />
    </div>
    <div className="p-2 rounded-lg hover:shadow-lg ">
      <img src="/saidebaricon2.png" alt="icon3" />
    </div>
    <div className="p-2">
      <img src="https://placehold.co/40x40" alt="icon4" />
    </div>
    </div>
  );
};

export default Sidebar;

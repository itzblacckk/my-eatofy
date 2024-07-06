import React from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-red-500">EATOFY</div>
      <div>
      <input 
        type="text" 
        placeholder="Search for dishes..." 
        value={searchQuery}
        onChange={onSearchChange}
        className="border bg-gray-500 mr-5  text-white rounded-[10px] p-2 w-200"
      />
      <input 
        type="text" 
        placeholder="Search for Code..." 
        value={searchQuery}
        onChange={onSearchChange}
        className="border bg-gray-500  text-white rounded-[10px] p-2 w-200"
      />
      </div>
    </header>
  );
};

export default Header;

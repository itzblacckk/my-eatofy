import React from 'react';

interface DishCardProps {
  name: string;
  bowlsAvailable: number;
  imageSrc: string;
  isVegetarian: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ name, bowlsAvailable, imageSrc, isVegetarian }) => {
  return (
    <div className={`p-4 cursor-pointer lg:w-[200px] sm: w-[300px]    border rounded shadow-md bg-white ${isVegetarian ? 'border-green-500' : 'border-red-500'}`}>
      <div className="w-32 h-32 mx-auto">
        <img src={imageSrc} alt={name} className="w-full h-full shadow-lg object-cover rounded-full" />
      </div>
      <div className="mt-2 text-center text-black">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>{bowlsAvailable} Bowls available</p>
      </div>
    </div>
  );
};

export default DishCard;

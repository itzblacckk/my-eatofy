import React from 'react';

const MenuManagement: React.FC = () => {
  const menuItems = [
    {
      name: "Pizza Menu",
      description: "Pizza Mixups",
      details: "Paste of your choice",
      price: "Rs155",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Spicy Bowl",
      description: "Spicy Mixups",
      details: "Taste of spicy",
      price: "Rs80",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Noodles Veg",
      description: "Taste Of Spicy",
      details: "Best Ingredient",
      price: "Rs145",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Sushi",
      description: "Sushi Mixups",
      details: "Good qualities Veg",
      price: "Rs75",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Pineapple lin",
      description: "Pineapple Mixups",
      details: "Sweet of your choice",
      price: "Rs145",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Health Menus",
      description: "Sosis Mixups",
      details: "Good At Taste",
      price: "Rs155",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Chicken Curry",
      description: "Masala Mixups",
      details: "Taste Good",
      price: "Rs199",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Pasta Mix",
      description: "Pasta Mixups",
      details: "Paste of your choice",
      price: "Rs65",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Burger",
      description: "Burger Mixups",
      details: "Burger of your choice",
      price: "Rs95",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Manchurian",
      description: "ShizWan Mixups",
      details: "Manchu of your choice",
      price: "Rs125",
      img: "https://placehold.co/50x50",
    },
    {
      name: "Toast Bread",
      description: "Roasted Mixups",
      details: "Good Taste",
      price: "Rs55",
      img: "https://placehold.co/50x50",
    },
  ];

  return (
    <div className="flex-1  p-6">
      <div className=' flex m-10 justify-center'>
      <h1 className="text-2xl  font-bold mb-4">
        Menu <span className="text-red-500">Management</span>
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-10 sm:gap-4 ">
        {menuItems.map((item, index) => (
          <div key={index} className="border rounded-lg bg-white shadow-lg border-red-500 p-4 flex items-center space-x-4">
            <img src={item.img} alt={item.name} />
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>{item.description}</p>
              <p className="text-muted-foreground">{item.details}</p>
              <p className="font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex   left-[50%] translate-[-50%] justify-center mt-6">
        <button className="bg-red-500 fixed bottom-5 text-primary-foreground px-4 py-2 rounded-full flex items-center justify-center space-x-2">
          <span>Click To Add Menu</span>
          <img src="https://openui.fly.dev/openui/24x24.svg?text=➕" alt="add-icon" />
        </button>
      </div>
    </div>
  );
};

export default MenuManagement;

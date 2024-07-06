import React from 'react';

const KitchenPage: React.FC = () => {
  const orders = [
    {
      id: 351,
      date: '05 Feb 2023, 08:28 PM',
      items: [
        {
          name: 'Vegetable Mixups',
          description: 'Vegetable Fritters with Egg',
          price: 'Rs155',
          quantity: 1,
          image: '/dish3.jpg',
        },
        {
          name: 'Chinese Takeout Dish',
          description: 'Fresh Prawn mix salad',
          price: '$5.30',
          quantity: 1,
          image: '/dish5.jpg',
        },
      ],
    },
    {
      id: 350,
      date: '05 Feb 2023, 08:28 PM',
      items: [
        {
          name: 'Baked Pasted Dishes',
          description: 'Vegetable Fritters with Egg',
          price: 'Rs199',
          quantity: 1,
          image: '/dish6.jpg',
        },
        {
          name: 'Chinese Takeout Dish',
          description: 'Fresh Prawn mix salad',
          price: '$5.30',
          quantity: 1,
          image: '/dish4.jpg',
        },
      ],
    },
    {
      id: 349,
      date: '05 Feb 2023, 08:28 PM',
      items: [
        {
          name: 'Vegetable Mixups',
          description: 'Vegetable Fritters with Egg',
          price: 'Rs199',
          quantity: 1,
          image: '/dish4.jpg',
        },
        {
          name: 'Chinese Takeout Dish',
          description: 'Fresh Prawn mix salad',
          price: 'Rs299',
          quantity: 1,
          image: '/dish3.jpg',
        },
        {
            name: 'Vegetable Mixups',
            description: 'Vegetable Fritters with Egg',
            price: 'Rs199',
            quantity: 1,
            image: '/dish4.jpg',
          },
      ],
    },
  ];

  return (
    <div className="w-5/6 p-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-red-600 mb-4 md:mb-0">EATOFY</h1>
        <input
          type="text"
          placeholder="Search for food, coffee, etc."
          className="p-2 border rounded-md w-full md:w-1/3"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Order List</h2>
        <div className="flex space-x-2 mt-2 overflow-x-auto">
          {orders.map((order) => (
            <button
              key={order.id}
              className="bg-green-100 text-green-600 px-4 py-2 rounded-md whitespace-nowrap"
            >
              #{order.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border shadow-lg  bg-slate-100 rounded-md p-4">
            <h3 className="font-semibold">Order #{order.id}</h3>
            <p className="text-sm text-zinc-500">{order.date}</p>
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.description}</p>
                  <p className="font-semibold">{item.price}</p>
                  <p className="text-sm text-zinc-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
            
            <button className="bg-green-100 text-green-600 px-4 float-right py-2 rounded-md mt-5">
            OK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenPage;

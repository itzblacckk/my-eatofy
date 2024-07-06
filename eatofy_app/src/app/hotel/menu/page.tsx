"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import Head from 'next/head';
import Header from '../Header';
import Sidebar from '../Sidebar';
import DishCard from '../DishCard';

interface Dish {
  name: string;
  bowlsAvailable: number;
  imageSrc: string;
  isVegetarian: boolean;
  category: string;
  menu_id: string; // Add menu_id to Dish
}

interface CartItem extends Dish {
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onIncreaseQuantity: (name: string) => void;
  onDecreaseQuantity: (name: string) => void;
  onRemoveItem: (name: string) => void;
  onSubmitOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onSubmitOrder }) => {
  if (cartItems.length === 0) return null;

  return (
    <div className="bg-black text-white w-96 p-4">
      <div className="text-xl font-bold mb-4">Orders #34562</div>
      <div className="flex space-x-2 mb-4">
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">Dessert</button>
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">To Go</button>
        <button className="bg-zinc-700 text-white px-4 py-2 rounded-lg">Delivery</button>
      </div>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={item.imageSrc} alt="dish image" className="w-10 h-10 rounded-full" />
              <div>
                <div>{item.name}</div>
                <div className="text-sm text-zinc-400">Rs 199</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => onDecreaseQuantity(item.name)}>-</button>
              <input type="number" value={item.quantity} readOnly className="w-12 text-black text-center" />
              <button onClick={() => onIncreaseQuantity(item.name)}>+</button>
              <div>Rs {199 * item.quantity}</div>
              <button onClick={() => onRemoveItem(item.name)} className="text-red-600">🗑️</button>
            </div>
          </div>
        ))}
        <input type="text" placeholder="Order Note..." className="w-full px-4 py-2 rounded-lg text-black" />
      </div>
      <div className="mt-4">
        <div className='fixed bottom-6'>
          <div className="flex justify-between">
            <div>Discount</div>
            <div>Rs 200</div>
          </div>
          <div className="flex justify-between">
            <div>Sub total</div>
            <div>Rs {cartItems.reduce((total, item) => total + 199 * item.quantity, 0)}</div>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">SAVE</button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg" onClick={onSubmitOrder}>PAY</button>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Bill Preview</button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Print</button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">KOT</button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">Order Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const allDishes: Dish[] = [
  { name: 'Spicy seasoned seafood noodles', bowlsAvailable: 20, imageSrc: '/dish1.jpg', isVegetarian: false, category: 'Hot Dishes', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Salted Pasta with mushroom sauce', bowlsAvailable: 11, imageSrc: '/dish2.jpg', isVegetarian: true, category: 'Hot Dishes', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Beef dumpling in hot and sour soup', bowlsAvailable: 16, imageSrc: '/dish5.jpg', isVegetarian: false, category: 'Soup', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Grilled Chicken', bowlsAvailable: 20, imageSrc: '/dish6.jpg', isVegetarian: false, category: 'Grill', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Healthy noodle with spinach leaf', bowlsAvailable: 22, imageSrc: '/dish4.jpg', isVegetarian: true, category: 'Cold Dishes', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Hot spicy fried rice with omelet', bowlsAvailable: 13, imageSrc: '/dish3.jpg', isVegetarian: false, category: 'Hot Dishes', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
  { name: 'Cheese Burger', bowlsAvailable: 10, imageSrc: '/images/dish7.jpg', isVegetarian: false, category: 'Appetizer', menu_id: 'bf5862b7-e46e-455c-b446-a6acca33f11a' },
];

const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hot Dishes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (dish: Dish) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.name === dish.name);
        if (existingItem) {
            return prevItems.map(item =>
                item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevItems, { ...dish, quantity: 1, menu_id: dish.menu_id }];
        }
    });
};

  const handleIncreaseQuantity = (name: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (name: string) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (name: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== name));
  };

  const handleSubmitOrder = async () => {
    const orderData = {
      data: cartItems.map(item => ({
        quantity: item.quantity.toString(),
        menu_id: item.menu_id,
        order_id: '40bc3ad1-41ac-431a-b9a4-69672a5e1c40', // Replace with actual order ID if available
        note: ''// Add any notes if available
        
      }))
    };
    console.log(orderData)
    try {
      const response = await axios.post('http://192.168.1.206:3000/api/hotel/orders/menus/add/multiple', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Order submitted:', response.data);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const filteredDishes = allDishes.filter(dish =>
    dish.category === selectedCategory && dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-white min-h-screen">
      <div className="flex-1">
        <Head>
          <title>EATOFY</title>
        </Head>
        <Header
          searchQuery={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />
        <main className="p-4">
          <h2 className='text-black text-lg font-bold ml-3'>Choose Dishes</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 ${selectedCategory === category ? 'text-red-500 font-bold' : 'text-gray-500'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
            {filteredDishes.map((dish, index) => (
              <div key={index} onClick={() => handleAddToCart(dish)}>
                <DishCard
                  name={dish.name}
                  bowlsAvailable={dish.bowlsAvailable}
                  imageSrc={dish.imageSrc}
                  isVegetarian={dish.isVegetarian}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Cart
        cartItems={cartItems}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveItem={handleRemoveItem}
        onSubmitOrder={handleSubmitOrder}
      />
    </div>
  );
};

export default Home;

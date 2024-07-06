import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block mb-1 text-gray-800 font-semibold text-xl">Email</label>
          <input 
            required 
            name="email" 
            id="email" 
            type="email" 
            className="w-full p-3 rounded-lg text-black bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500" 
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="block mb-1 text-gray-800 font-semibold text-xl">Password</label>
          <input 
            required 
            name="password" 
            id="password" 
            type="password" 
            className="w-full p-3 rounded-lg text-black bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500" 
          />
        </div>
        <button 
          type="submit" 
          className="relative py-5 px-8 text-white text-base font-bold rounded-full overflow-hidden bg-black transition-all duration-1000 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-red-500 before:to-red-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

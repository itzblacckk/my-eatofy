"use client"

import React from 'react';

const Widget: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-red-600 to-zinc-900 text-white">
      
      <div className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
          <input type="text" placeholder="Search for subscriptions, payouts, and reminders" className="w-full lg:w-1/2 p-2 rounded-[50px] bg-zinc-800 text-white placeholder-zinc-400" />
          <h2 className='bg-red-500 rounded-[50px] p-4'>7 FEB 2024</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side */}
          <div className="lg:w-1/2 lg:pr-4">
            <div className="flex flex-row justify-between items-center mb-8 space-y-4">
              <h1 className="text-2xl font-bold">Get started with SubsManage</h1>
              <button className="bg-red-600 p-2 rounded-lg">+Add Subscription</button>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl mb-4">My subscriptions</h2>
              <div className="p-4 backdrop-blur-xl w-full bg-black/30 rounded-lg">
                <p className="mb-5 font-bold">4 active</p>
                <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-4 lg:space-y-0">
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="https://placehold.co/32x32" alt="user" className="mr-2 rounded-full" />
                      <span>John Adams</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <img src="https://placehold.co/32x32" alt="user" className="mr-2 rounded-full" />
                      <span>John Adams</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <img src="https://placehold.co/32x32" alt="user" className="mr-2 rounded-full" />
                      <span>John Adams</span>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Monthly Subscription</p>
                    <p className="mb-2">Annual Payment</p>
                    <p className="mb-2">Set payment reminder</p>
                  </div>
                  <div>
                    <p className="mb-2">Due today!</p>
                    <p className="mb-2">Due tomorrow</p>
                    <p className="mb-2">Due today</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button className="bg-red-600 p-3 rounded-[50px]">View all subscriptions</button>
                </div>
              </div>
            </div>
            <div className="mt-8">
          <h2 className="text-xl mb-4">Annual Subscriptions</h2>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src="https://placehold.co/600x200" alt="Annual Subscriptions Chart" className="w-full"/>
          </div>
        </div>
          </div>
          
          {/* Right Side */}
          <div className="lg:w-1/2 lg:pl-4">
            <div className="flex flex-col justify-between items-center mb-8 space-y-4">
              <h2 className="text-xl">Current Month Overview</h2>
              <div className="flex space-x-4">
                <div>Jan <span className=" p-1 rounded-lg">9</span></div>
                <div className="bg-red-600 p-1 rounded-lg">Feb <span className=" p-1 rounded-lg">2</span></div>
                <div>Mar <span className=" p-1 rounded-lg">7</span></div>
                <div>Apr <span className=" p-1 rounded-lg">4</span></div>
                <div>May <span className=" p-1 rounded-lg">7</span></div>
                <div>Jun <span className=" p-1 rounded-lg">6</span></div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl mb-4">Upcoming payment this month</h2>
              <div className="backdrop-blur-xl bg-black/30 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-zinc-900 p-2 rounded-full w-8 h-8 flex items-center justify-center">2</div>
                  <div>
                    <p className="font-bold">Subscription renewal alert</p>
                    <p className="text-zinc-400">3 of 4 payments, Recharge</p>
                  </div>
                  <div>10:00-11:30</div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-black/30 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-zinc-800 p-2 rounded-full w-8 h-8 flex items-center justify-center">8</div>
                  <div>
                    <p className="font-bold">Payment Due</p>
                    <p className="text-zinc-400">3 of 4 payments, Electricity</p>
                  </div>
                  <div>11:00-12:30</div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-black/30 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-zinc-900 p-2 rounded-full w-8 h-8 flex items-center justify-center">11</div>
                  <div>
                    <p className="font-bold">Subscription upgrade</p>
                    <p className="text-zinc-400">1 of 2 upgrades, Phone</p>
                  </div>
                  <div>10:00-11:30</div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-black/30 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-zinc-900 p-2 rounded-full w-8 h-8 flex items-center justify-center">23</div>
                  <div>
                    <p className="font-bold">Bill payment alert</p>
                    <p className="text-zinc-400">2 of 4 payments, Tuition fees</p>
                  </div>
                  <div>10:00-11:30</div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-black/30 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div className="bg-zinc-900 p-2 rounded-full w-8 h-8 flex items-center justify-center">27</div>
                  <div>
                    <p className="font-bold">Subscription Due</p>
                    <p className="text-zinc-400">1 of 4 payments, Water Bill</p>
                  </div>
                  <div>10:00-11:30</div>
                </div>
              </div>
              <button className="bg-red-600 p-2 w-full rounded-[50px]">View full list</button>
            </div>
          </div>
          
        </div>
        
       
      </div>
    </div>
  );
};

export default Widget;

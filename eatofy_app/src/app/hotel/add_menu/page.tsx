import React from 'react';

export default function Menu() {
    return (
        <div className=" p-4  rounded-t-lg">
            <div className='bg-red-500 p-10 rounded-lg'>
            <h2 className="text-center text-primary-foreground text-xl font-semibold">
                Menu  <span className=" text-white">Information</span>
            </h2>
            </div>
            <div className=" bg-slate-100 p-6 rounded-b-lg shadow-md">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="dishes-name" className="block text-card-foreground">Dishes Name</label>
                        <input id="dishes-name" type="text" placeholder="Enter Name" className="w-full border border-red-500 rounded p-2 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-card-foreground">Price</label>
                        <input id="price" type="text" placeholder="Enter Price" className="w-full border border-red-500 rounded p-2 mt-1" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-card-foreground">Description</label>
                        <textarea id="description" placeholder="Enter Description" className="w-full border border-red-500 rounded p-2 mt-1"></textarea>
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-card-foreground">Category</label>
                        <div className="relative">
                            <select id="category" className="w-full border border-red-500 bg-white rounded p-2 mt-1 appearance-none">
                                <option>Menus</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <img src="https://openui.fly.dev/openui/24x24.svg?text=⌄" alt="dropdown-icon" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dish-type" className="block text-card-foreground">Dish Type</label>
                        <div className="relative">
                            <select id="dish-type" className="w-full border border-red-500 bg-white rounded p-2 mt-1 appearance-none">
                                <option>Type</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <img src="https://openui.fly.dev/openui/24x24.svg?text=⌄" alt="dropdown-icon" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="select-floor" className="block text-card-foreground">Select Floor</label>
                        <div className="relative">
                            <select id="select-floor" className="w-full border border-red-500 bg-white rounded p-2 mt-1 appearance-none">
                                <option>Ac Floor</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <img src="https://openui.fly.dev/openui/24x24.svg?text=⌄" alt="dropdown-icon" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <span className="text-card-foreground">Menu Picture</span>
                    <button className="flex items-center ml-2 bg-red-500 text-primary-foreground border border-primary rounded p-2">
                        <span className='m-1'>+</span>
                        <span className="ml-1">Add</span>
                    </button>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="bg-red-500 text-destructive-foreground p-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
}

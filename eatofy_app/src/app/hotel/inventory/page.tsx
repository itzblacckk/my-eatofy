import React from 'react';

const Widget: React.FC = () => {
    return (
        <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                Inventory <span className="text-red-500">Management</span>
            </h1>
            <div className=" m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border-2 border-green-500 p-4 rounded-lg">
                    <h2 className="text-red-500 font-bold flex items-center mb-2">
                        <img
                            src="https://openui.fly.dev/openui/24x24.svg?text=📦"
                            alt="item management icon"
                            className="w-6 h-6 mr-2"
                        />
                        Item Management
                    </h2>
                    <p>Initiate Request For Purchase(PO) and Keep Track Of The Purchase Request</p>
                </div>

                <div className="border-2 border-green-500 p-4 rounded-lg">
                    <h2 className="text-red-500 font-bold flex items-center mb-2">
                        <img
                            src="https://openui.fly.dev/openui/24x24.svg?text=📊"
                            alt="available stock icon"
                            className="w-6 h-6 mr-2"
                        />
                        Available Stock
                    </h2>
                    <p>Available Stock Update closing Stock of Raw Material With Case</p>
                </div>

                <div className="border-2 border-green-500 p-4 rounded-lg">
                    <h2 className="text-red-500 font-bold flex items-center mb-2">
                        <img
                            src="https://openui.fly.dev/openui/24x24.svg?text=🛒"
                            alt="purchase management icon"
                            className="w-6 h-6 mr-2"
                        />
                        Purchase Management
                    </h2>
                    <p>Keep Track Of Raw Material Purchase And Inward Entry</p>
                </div>

                <div className="border-2 border-green-500 p-4 rounded-lg">
                    <h2 className="text-red-500 font-bold flex items-center mb-2">
                        <img
                            src="https://openui.fly.dev/openui/24x24.svg?text=🗑"
                            alt="wastage icon"
                            className="w-6 h-6 mr-2"
                        />
                        Wastage
                    </h2>
                    <p>Enter Wastage Of Your Item/Raw Material & Optimise on Plugging Leakages</p>
                </div>

                <div className="border-2 border-green-500 p-4 rounded-lg">
                    <h2 className="text-red-500 font-bold flex items-center mb-2">
                        <img
                            src="https://openui.fly.dev/openui/24x24.svg?text=📄"
                            alt="report icon"
                            className="w-6 h-6 mr-2"
                        />
                        Report
                    </h2>
                    <p>Know Your Raw Material Stock Status And Purchase/Consumption History</p>
                </div>
            </div>
        </div>
    );
};

export default Widget;

import React from 'react';

interface Table {
    tableNo: string;
    customerName: string;
    payment: string;
    status: 'RESERVATION' | 'BOOKED' | 'PAYMENT' | 'AVAILABLE';
}

const mainHallTables: Table[] = [
    { tableNo: 'T1', customerName: '', payment: '', status: 'AVAILABLE' },
    { tableNo: 'T2', customerName: 'Sahas Kamble', payment: 'Rs 1150', status: 'PAYMENT' },
    { tableNo: 'T3', customerName: '', payment: '', status: 'BOOKED' },
    { tableNo: 'T4', customerName: '', payment: '', status: 'PAYMENT' },
    { tableNo: 'T5', customerName: '', payment: '', status: 'RESERVATION' },
    { tableNo: 'T6', customerName: '', payment: '', status: 'AVAILABLE' },
    { tableNo: 'T7', customerName: '', payment: '', status: 'BOOKED' },
    { tableNo: 'T8', customerName: '', payment: '', status: 'BOOKED' },
    { tableNo: 'T9', customerName: '', payment: '', status: 'PAYMENT' },
    { tableNo: 'T10', customerName: '', payment: '', status: 'RESERVATION' },
    { tableNo: 'T11', customerName: 'Sahas Kamble', payment: 'Rs 1150', status: 'PAYMENT' },
    { tableNo: 'T12', customerName: '', payment: '', status: 'AVAILABLE' },
];

const firstFloorTables: Table[] = [
    { tableNo: 'T1', customerName: '', payment: '', status: 'RESERVATION' },
    { tableNo: 'T2', customerName: '', payment: '', status: 'PAYMENT' },
    { tableNo: 'T3', customerName: '', payment: '', status: 'BOOKED' },
    { tableNo: 'T4', customerName: '', payment: '', status: 'AVAILABLE' },
    { tableNo: 'T5', customerName: 'Sahas Kamble', payment: 'Rs 1150', status: 'BOOKED' },
    { tableNo: 'T6', customerName: '', payment: '', status: 'AVAILABLE' },
];

const getStatusBgColor = (status: 'RESERVATION' | 'BOOKED' | 'PAYMENT' | 'AVAILABLE') => {
    switch (status) {
      case 'RESERVATION':             
            return 'borde border-zinc-500 shadow-lg shadow-zinc-500 hover:bg-zinc-500'; 
      case 'BOOKED':            
           return 'border border-red-500 shadow-lg shadow-red-500 hover:bg-red-500';
      case 'PAYMENT':             
           return 'border border-green-500 shadow-lg shadow-green-500 hover:bg-green-500';
      case 'AVAILABLE':
            return ' border border-blue-500 shadow-lg shadow-blue-500 hover:bg-blue-500';
        default:
            return '';
            
    }
};

const Widget: React.FC = () => {
    return (
        <div className="flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">EATOFY</h1>
                <h2 className="text-3xl font-bold">
                    RESTAURANT <img src="https://openui.fly.dev/openui/24x24.svg?text=🍽️" alt="restaurant" className="inline-block" />
                </h2>
            </div>

            <div className="flex space-x-4 mb-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=🛍️" alt="TakeAway" />
                    <span>TakeAway</span>
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=🚚" alt="Delivery" />
                    <span>Delivery</span>
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=🍴" alt="Zomato" />
                    <span>Zomato</span>
                </button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=🛵" alt="Swiggy" />
                    <span>Swiggy</span>
                </button>
            </div>

            <div className="flex space-x-4 mb-4">
                <span className="flex items-center space-x-2">
                    <span className="block w-4 h-4 bg-red-500"></span>
                    <span>BOOKED</span>
                </span>
                <span className="flex items-center space-x-2">
                    <span className="block w-4 h-4 bg-zinc-500"></span>
                    <span>RESERVATION</span>
                </span>
                <span className="flex items-center space-x-2">
                    <span className="block w-4 h-4 bg-green-500"></span>
                    <span>PAYMENT</span>
                </span>
                <span className="flex items-center space-x-2">
                    <span className="block w-4 h-4 bg-blue-500"></span>
                    <span>AVAILABLE</span>
                </span>
            </div>

            <div className="mb-4">
                <h3 className="bg-red-500 text-white px-4 py-2 rounded-full inline-block">Main Hall</h3>
                <div className="grid grid-cols-6 gap-4 mt-4">
                    {mainHallTables.map((table) => (
                        <div key={table.tableNo} className={`border p-4 rounded-lg ${getStatusBgColor(table.status)}`}>
                            <div>{table.tableNo}</div>
                            {table.customerName && <div>{table.customerName}</div>}
                            {table.payment && <div>({table.payment})</div>}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="bg-red-500 text-white px-4 py-2 rounded-full inline-block">First Floor</h3>
                <div className="grid grid-cols-6 gap-4 mt-4">
                    {firstFloorTables.map((table) => (
                        <div key={table.tableNo} className={`border p-4 rounded-lg ${getStatusBgColor(table.status)}`}>
                            <div>{table.tableNo}</div>
                            {table.customerName && <div>{table.customerName}</div>}
                            {table.payment && <div>({table.payment})</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Widget;

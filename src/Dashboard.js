import React from 'react';

function Dashboard() {
  return (
    <div className="flex">
        <aside className="w-64 bg-gray-800 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
            <nav>
                <ul>
                    <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-2"></span>Overview</a></li>
                    <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-2"></span>Statistics</a></li>
                    <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-2"></span>Users</a></li>
                    <li className="mb-4"><a href="#" className="flex items-center text-gray-300 hover:text-white"><span className="mr-2"></span>Settings</a></li>
                </ul>
            </nav>
        </aside>
        <main className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-8">Welcome back, User!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Total Revenue</h3>
                    <p className="text-3xl font-bold">$4,206.90</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Subscriptions</h3>
                    <p className="text-3xl font-bold">+2,350</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Sales</h3>
                    <p className="text-3xl font-bold">+1,200</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Active Now</h3>
                    <p className="text-3xl font-bold">+573</p>
                </div>
            </div>
        </main>
    </div>
  );
}

export default Dashboard;

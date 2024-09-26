import { orderData } from "../data/data";
import { useState, useEffect } from 'react';

function Add() {
    const [showForm, setShowForm] = useState(false); // Control modal for adding new order
    const [newOrder, setNewOrder] = useState({ id: '', user: '', project: '', address: '', date: '', status: '' });
    const [orderData, setOrderData] = useState(orderData); // Store orders

    // Load saved orders from localStorage on component mount
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders'));
        if (savedOrders) {
            setOrderData([...orderData, ...savedOrders]);
        }
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
    };

    // Add a new order and save it to localStorage
    const handleAddOrder = () => {
        const updatedOrders = [...orderData, { ...newOrder, date: "Just now" }];
        setOrderData(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        setShowForm(false);
    };
    
    return (
        <>
            <div>
            <button
                className="mb-4 bg-blue-500 text-white p-2 rounded"
                onClick={() => setShowForm(true)}
            >
                Add Order
            </button>

            {/* Modal Form to Add New Order */}
            {showForm && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 className="text-lg mb-4">Add New Order</h2>
                        <form>
                            <input
                                name="id"
                                value={newOrder.id}
                                onChange={handleInputChange}
                                placeholder="Order ID"
                                className="w-full mb-2 p-2 border"
                            />
                            <input
                                name="user"
                                value={newOrder.user}
                                onChange={handleInputChange}
                                placeholder="User Name"
                                className="w-full mb-2 p-2 border"
                            />
                            <input
                                name="project"
                                value={newOrder.project}
                                onChange={handleInputChange}
                                placeholder="Project Name"
                                className="w-full mb-2 p-2 border"
                            />
                            <input
                                name="address"
                                value={newOrder.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="w-full mb-2 p-2 border"
                            />
                            <input
                                name="status"
                                value={newOrder.status}
                                onChange={handleInputChange}
                                placeholder="Status"
                                className="w-full mb-2 p-2 border"
                            />

                            <button
                                type="button"
                                className="bg-blue-500 text-white p-2 rounded mt-2"
                                onClick={handleAddOrder}
                            >
                                Save Order
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Add;
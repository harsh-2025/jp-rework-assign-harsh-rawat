import React, { useState } from 'react';

const CreateOffer = ({ onCreate }) => {
    const [offer, setOffer] = useState({
        id: '',
        user: '',
        project: '',
        address: '',
        date: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOffer((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(offer); // Call the function to create the offer
        setOffer({ id: '', user: '', project: '', address: '', date: '', status: '' }); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-gray-50">
            <h2 className="text-lg font-bold">Create New Offer</h2>
            <div>
                <label className="block">ID:</label>
                <input
                    type="text"
                    name="id"
                    value={offer.id}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">User:</label>
                <input
                    type="text"
                    name="user"
                    value={offer.user}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Project:</label>
                <input
                    type="text"
                    name="project"
                    value={offer.project}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Address:</label>
                <input
                    type="text"
                    name="address"
                    value={offer.address}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Date:</label>
                <input
                    type="date"
                    name="date"
                    value={offer.date}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                />
            </div>
            <div>
                <label className="block">Status:</label>
                <select
                    name="status"
                    value={offer.status}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    required
                >
                    <option value="">Select Status</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Create Offer
            </button>
        </form>
    );
};

export default CreateOffer;

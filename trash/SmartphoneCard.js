import React from 'react';
import { Link } from 'react-router-dom';

const SmartphoneCard = ({ phone }) => (
    <div className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 m-2 bg-white rounded-lg shadow-md">
        <img
            src={phone.image || 'https://via.placeholder.com/150'}
            alt={phone.phone_name}
            className="w-full h-40 object-cover rounded-md"
        />
        <div className="mt-2 text-center">
            <h5 className="text-lg font-bold">{phone.phone_name}</h5>
            <p className="text-gray-600">Brand: {phone.brand}</p>
            <Link to={`/detail/${phone.slug}`} className="text-blue-600 hover:underline">
                View Details
            </Link>
        </div>
    </div>
);

export default SmartphoneCard;

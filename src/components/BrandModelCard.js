// src/components/BrandModelCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ChevronRight } from 'lucide-react';

const BrandModelCard = ({ title, to, count, type }) => {
    return (
        <Link
            to={to}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        {count && (
                            <p className="text-sm text-gray-500">
                                {count} {type}
                            </p>
                        )}
                    </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
        </Link>
    );
};

export default BrandModelCard;
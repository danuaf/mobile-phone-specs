// src/pages/Models.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getModelsByBrand } from '../api';
import BrandModelCard from '../components/BrandModelCard';
import { ArrowLeft, Phone } from 'lucide-react';

const Models = () => {
    const { brandName } = useParams();
    const navigate = useNavigate();
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const data = await getModelsByBrand(brandName);
                setModels(data);
            } catch (err) {
                setError('Failed to load models. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchModels();
    }, [brandName]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
                <div className="mb-4 rounded-full bg-red-100 p-3 text-red-600">
                    <Phone className="h-6 w-6" />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">{error}</h2>
                <button
                    onClick={() => window.location.reload()}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-full p-2 hover:bg-gray-100"
                    >
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{brandName} Models</h1>
                        <p className="text-sm text-gray-500">{models.length} models available</p>
                    </div>
                </div>
            </header>

            <main className="p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {models.map((model) => (
                        <BrandModelCard
                            key={model.modelValue}
                            title={model.modelValue}
                            to={`/detail/${brandName}/${model.modelValue}`}
                            type="specifications"
                        />
                    ))}
                </div>

                {models.length === 0 && (
                    <div className="mt-8 text-center">
                        <div className="mb-4 inline-block rounded-full bg-gray-100 p-3">
                            <Phone className="h-6 w-6 text-gray-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">No Models Found</h2>
                        <p className="mt-2 text-gray-500">No models are available for {brandName}</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Models;
// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { getAllBrands } from '../api';
import BrandModelCard from '../components/BrandModelCard';
import { Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';


const Home = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await getAllBrands();
                setBrands(data);
            } catch (err) {
                setError('Failed to load brands. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchBrands();
    }, []);

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
        <PageLayout
            title="Phone Specifications"
            subtitle="Find detailed specifications for any smartphone"
            gradientHeader={true}
            action={
                <Link
                    to="/search"
                    className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 p-4 text-sm backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                    <Search className="h-4 w-4" />
                    <span>Search for any brand or model...</span>
                </Link>
            }>

            <h2 className="mb-4 text-xl font-semibold text-gray-900">Popular Brands</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {brands.map((brand) => (
                    <BrandModelCard
                        key={brand.brandValue}
                        title={brand.brandValue}
                        to={`/models/${brand.brandValue}`}
                        type="models"
                        count={brand.modelCount || 'Multiple'}
                    />
                ))}
            </div>
        </PageLayout>
    );
};

export default Home;
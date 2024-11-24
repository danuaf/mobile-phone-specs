// src/pages/Search.js
import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { getAllBrands, getModelsByBrand } from '../api';
import PageLayout from '../components/PageLayout';
import BrandModelCard from '../components/BrandModelCard';


const Search = () => {
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await getAllBrands();
            setBrands(data);
        };
        fetchBrands();
    }, []);

    useEffect(() => {
        const fetchModels = async () => {
            if (selectedBrand) {
                const data = await getModelsByBrand(selectedBrand);
                setModels(data);
            } else {
                setModels([]);
            }
            setSelectedModel('');
        };
        fetchModels();

    }, [selectedBrand]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(true);
        setLoading(false);

    };

    return (
        <PageLayout
            title="Search Mobile Phones"
            gradientHeader={true}
            subtitle="Search for detailed specifications"
        >
            <div className="bg-white rounded-lg shadow-sm p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Brand
                            </label>
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select Brand</option>
                                {brands.map((brand) => (
                                    <option key={brand.brandValue} value={brand.brandValue}>
                                        {brand.brandValue}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Model
                            </label>
                            <select
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                disabled={!selectedBrand}
                            >
                                <option value="">Select Model</option>
                                {models.map((model) => (
                                    <option key={model.modelValue} value={model.modelValue}>
                                        {model.modelValue}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        disabled={loading || !selectedBrand || !selectedModel}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                                Loading...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                <SearchIcon className="w-4 h-4" />
                                Show Specifications
                            </span>
                        )}
                    </button>
                </form>

                {show && (

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <BrandModelCard
                            key={selectedModel}
                            title={selectedModel}
                            to={`/detail/${selectedBrand}/${selectedModel}`}
                            type="specifications"
                        />
                    </div>
                )}
            </div>
        </PageLayout>
    );
};

export default Search;
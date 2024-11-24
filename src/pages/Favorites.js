// src/pages/Favorites.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import BrandModelCard from '../components/BrandModelCard';


const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Memuat data favorit dari localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <PageLayout
            title="Favorites"
            gradientHeader={true}
            subtitle="Your Favorite Smartphone"
        >
            {favorites.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((fav) => (
                        <BrandModelCard
                            key={fav.model}
                            title={fav.model}
                            to={`/detail/${fav.brand}/${fav.model}`}
                            type="specifications"
                        />
                    ))}
                </div>
            ) : (
                <p>No favorites added yet</p>
            )}


        </PageLayout>
    );
};

export default Favorites;

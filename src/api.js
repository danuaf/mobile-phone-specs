// src/api.js
import axios from 'axios';

const API_KEY = 'ac9a5dec0fmshe2a944942061fe5p18c9c7jsne767a8d88723';
const API_HOST = 'mobile-phone-specs-database.p.rapidapi.com';

const apiOptions = {
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
    },
};

export const getAllBrands = async () => {
    try {
        const response = await axios.get(`https://${API_HOST}/gsm/all-brands`, apiOptions);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching all brands:', error);
        return [];
    }
};

export const getModelsByBrand = async (brandName) => {
    try {
        const response = await axios.get(
            `https://${API_HOST}/gsm/get-models-by-brandname/${brandName}`,
            apiOptions
        );
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching models for ${brandName}:`, error);
        return [];
    }
};

export const getSpecifications = async (brandName, modelName) => {
    try {
        const response = await axios.get(
            `https://${API_HOST}/gsm/get-specifications-by-brandname-modelname/${brandName}/${modelName}`,
            apiOptions
        );
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching specifications for ${brandName} ${modelName}:`, error);
        return null;
    }
};

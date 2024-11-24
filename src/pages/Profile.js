// src/pages/Profile.js

import React, { useState } from 'react';
import { Moon, Sun, Github, Mail, User, Info } from 'lucide-react';

const ProfileSection = ({ icon: Icon, title, children }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
        <div className="flex items-center mb-4">
            <Icon className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        {children}
    </div>
);

const Profile = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
        // Add actual dark mode implementation here
        document.documentElement.classList.toggle('dark');
    };

    const clearCache = () => {
        const confirmation = window.confirm(
            'Are you sure you want to clear the app cache? This will remove all saved specifications.'
        );
        if (confirmation) {
            localStorage.clear();
            alert('Cache cleared successfully!');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 pb-20">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg p-6 mb-6 text-white">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <button
                        onClick={handleThemeToggle}
                        className="p-2 rounded-full hover:bg-white/20 transition"
                    >
                        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <ProfileSection icon={Info} title="About App">
                <div className="prose prose-sm">
                    <p>
                        <strong>Smartphone Specs PWA</strong> adalah aplikasi yang memudahkan
                        Anda mencari dan membandingkan spesifikasi smartphone. Dengan
                        antarmuka yang intuitif dan data yang komprehensif, temukan
                        informasi detail tentang berbagai smartphone dengan mudah.
                    </p>
                </div>
            </ProfileSection>

            <ProfileSection icon={User} title="Developer">
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Danu Aditya Firnanda</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">danuadityfirnanda@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-gray-500" />
                        <a
                            href="https://github.com/danuaf"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Profile
                        </a>
                    </div>
                </div>
            </ProfileSection>

            <ProfileSection icon={Info} title="App Settings">
                <div className="space-y-4">
                    <button
                        onClick={clearCache}
                        className="w-full px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition"
                    >
                        Clear App Cache
                    </button>
                    <div className="text-sm text-gray-500">
                        Version 1.0.0
                    </div>
                </div>
            </ProfileSection>
        </div>
    );
};

export default Profile;
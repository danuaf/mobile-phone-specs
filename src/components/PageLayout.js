import React from 'react';
import { ArrowLeft } from 'lucide-react';


const PageLayout = ({
    title,
    subtitle,
    children,
    action,
    gradientHeader = false,
    backButton = false,
    onBack
}) => {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <header className={`${gradientHeader
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6'
                : 'sticky top-0 z-10 bg-white p-4 shadow-sm'
                }`}>
                <div className="flex items-center gap-4">
                    {backButton && (
                        <button
                            onClick={onBack}
                            className={`rounded-full p-2 ${gradientHeader
                                ? 'hover:bg-white/20'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                    )}
                    <div className="flex-1">
                        <h1 className={`text-2xl font-bold ${!gradientHeader && 'text-gray-900'}`}>
                            {title}
                        </h1>
                        {subtitle && (
                            <p className={gradientHeader ? 'text-blue-100' : 'text-sm text-gray-500'}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {action}
                </div>
            </header>

            <main className="p-4">
                {children}
            </main>
        </div>
    );
};

export default PageLayout;
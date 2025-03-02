import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const NotFound = () => {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">{t('page.notFound')}</p>
                <a href="/" className="text-blue-500 hover:text-blue-700 underline">
                    {String(t('page.returnHome'))}
                </a>
            </div>
        </div>
    );
}

export default NotFound;
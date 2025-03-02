import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';
// Available languages
export type Language = 'en' | 'lv';

// Language context type
type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => { },
    t: (key: string) => key,
});


// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Get stored language or default to 'en'
    const availableLanguages: Language[] = ['en', 'lv'];
    const storedLanguage = localStorage.getItem('language') as Language;
    const initialLanguage = availableLanguages.includes(storedLanguage) ? storedLanguage : 'en';
    const [language, setLanguage] = useState<Language>(initialLanguage);

    // const [language, setLanguage] = useState<Language>(savedLanguage || 'en');

    // Store language in local storage when it changes
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    // Translation function
    const t = (key: string): string => {
        const langData = translations[language];
        return langData[key as keyof typeof langData] || key;
    };


    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);
    const { t } = useLanguage();
    const navLinks = [
        { href: "#", label: t('nav.home') },
        { href: "#projects", label: t('nav.projects') },
        { href: "#about", label: t('nav.about') },
        { href: "#contact", label: t('nav.contact') }
    ];
    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-lg border-b border-border/40 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                <a href="/" className="text-xl font-display font-medium">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        narni<span className="font-bold">folio</span>
                    </span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a href={link.href} className="text-sm font-medium animated-underline pb-1">{link.label}</a>
                    ))}

                    {/* <a href="#about" className="text-sm font-medium animated-underline pb-1">About</a>
                    <a href="#contact" className="text-sm font-medium animated-underline pb-1">Contact</a> */}
                    <LanguageSwitcher />
                    <ThemeToggle />
                </nav>


                <div className="md:hidden flex items-center">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
    // Apply smooth scrolling behavior to the page
    useEffect(() => {
        // Smooth scroll to anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
                e.preventDefault();

                const targetElement = document.querySelector(anchor.hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: 'smooth'
                    });

                    // Update URL without scrolling
                    history.pushState(null, '', anchor.hash);
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main>
                <Hero />
                <ProjectGrid />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;

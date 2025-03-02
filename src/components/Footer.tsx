
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();
    return (
        <footer className="py-12 border-t border-border/40">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <a href="#" className="text-xl font-display font-medium">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                                narni<span className="font-bold">folio</span>
                            </span>
                        </a>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-muted-foreground">
                            &copy; {currentYear} {t('company.name')}
                        </p>
                    </div>

                    <div className="mt-6 md:mt-0">
                        <nav className="flex items-center gap-6">
                            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {t('nav.projects')}
                            </a>
                            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {t('nav.about')}
                            </a>
                            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {t('nav.contact')}
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

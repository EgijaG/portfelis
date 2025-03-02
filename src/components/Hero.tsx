
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/LanguageContext";
import React from "react";

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent dark:from-background dark:to-background/0 opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[100px]"></div>
            </div>

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6 animate-fade-in">
                        {t('hero.title')}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-slide-in" style={{ animationDelay: "0.1s" }}>
                        {t('hero.greeting')}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        <a
                            href="#projects"
                            className={cn(
                                "group flex items-center gap-2 px-6 py-3 rounded-full font-medium",
                                "bg-primary text-primary-foreground hover:bg-primary/90",
                                "transition-all duration-300"
                            )}
                        >
                            {t('hero.cta')}
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className={cn(
                                "px-6 py-3 rounded-full border border-border",
                                "hover:bg-secondary transition-colors duration-300"
                            )}
                        >
                            {t('nav.contact')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

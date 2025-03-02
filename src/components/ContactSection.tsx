
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/LanguageContext";
import React from "react";

export default function ContactSection() {
    const { t } = useLanguage();
    return (
        <section id="contact" className="section-container">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('contact.title')}</h2>
                <p className="text-muted-foreground mb-12 max-w-xl mx-auto">{t('contact.description')}</p>

                <div className="glass rounded-2xl p-8 md:p-12 mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4">{t('contact.info')}</h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:hello@example.com"
                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span>{t('contact.email')}</span>
                                </a>

                                <div className="pt-4">
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3">
                                        {t('contact.social')}
                                    </h4>
                                    <div className="flex gap-4">
                                        <a
                                            href="#"
                                            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center transition-transform hover:scale-110"
                                            aria-label="GitHub"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center transition-transform hover:scale-110"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4">{t('contact.message')}</h3>
                            <a
                                href="mailto:hello@example.com"
                                className={cn(
                                    "group flex items-center gap-2 px-6 py-3 rounded-full font-medium w-full justify-center",
                                    "bg-primary text-primary-foreground hover:bg-primary/90",
                                    "transition-all duration-300"
                                )}
                            >
                                {t('contact.emailMe')}
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

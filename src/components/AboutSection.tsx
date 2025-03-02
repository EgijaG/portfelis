
import React from "react";
import { Code, Monitor, Palette, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";


interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
    return (
        <div className={cn(
            "p-6 rounded-xl glass hover-card",
            "border border-border/50"
        )}>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('about.title')}</h2>
                    <p className="text-muted-foreground mb-4">
                        {t('about.paragraph1')}
                    </p>
                    <p className="text-muted-foreground mb-8">
                        {t('about.paragraph2')}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SkillCard
                        icon={<Code className="h-6 w-6 text-primary" />}
                        title={t('about.skills.automation')}
                        description={t('about.skills.automation.desc')}
                    />

                    <SkillCard
                        icon={<Palette className="h-6 w-6 text-primary" />}
                        title={t('about.skills.integration')}
                        description={t('about.skills.integration.desc')}
                    />

                    <SkillCard
                        icon={<Monitor className="h-6 w-6 text-primary" />}
                        title={t('about.skills.dashboards')}
                        description={t('about.skills.dashboards.desc')}
                    />

                    <SkillCard
                        icon={<Smartphone className="h-6 w-6 text-primary" />}
                        title={t('about.skills.customSolutions')}
                        description={t('about.skills.customSolutions.desc')}
                    />
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { useLanguage } from "../contexts/LanguageContext";


// Categories for filtering with translation keys
const categoryKeys = [
    "projects.category.all",
    "projects.category.automation",
    // "projects.category.dataAnalysis",
    "projects.category.education",
    "projects.category.crypto",
    // "projects.category.dashboard",
    // "projects.category.productivity",
    "projects.category.ai"
];

// Map translation keys to actual category values
const categoryValues = [
    "All",
    "Automation",
    // "Data Analysis",
    "Education",
    "Crypto",
    // "Dashboard",
    // "Productivity",
    "Artificial Intelligence"
];

export default function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { t } = useLanguage();

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('projects.title')}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {String(t('projects.description'))}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {categoryKeys.map((categoryKey, index) => {
                    const categoryValue = categoryValues[index];
                    return (
                        <button
                            key={categoryKey}
                            onClick={() => setActiveCategory(categoryValue)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                                activeCategory === categoryValue
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            )}
                        >
                            {t(categoryKey)}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="animate-fade-in">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    completedDate?: string;
    role?: string;
    overview?: string;
    features?: { title: string; description: string }[];
    gallery?: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
    technicalDetails?: Record<string, string>;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useLanguage();

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl bg-card hover-card",
                "border border-border/50 h-full"
            )}
        >
            <div className="aspect-video w-full overflow-hidden">
                <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                >
                </div>
            </div>

            <div className="p-6">
                <div className="mb-4 flex gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {project.category}
                    </span>
                    {project.tags.slice(0, 2).map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground">
                    {project.description}
                </p>
            </div>

            <div className={cn(
                "absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm opacity-0",
                "transition-opacity duration-300 group-hover:opacity-100"
            )}>
                <Link
                    to={`/project/${project.id}`}
                    className={cn(
                        "px-6 py-3 rounded-full bg-primary text-primary-foreground",
                        "transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
                    )}
                >
                    {t('projects.viewProject')}
                </Link>
            </div>
        </div>
    );
}
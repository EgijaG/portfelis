import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Project } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "../contexts/LanguageContext";

const ViewProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const projectId = parseInt(id || "0");
        const foundProject = projects.find(p => p.id === projectId);
        setProject(foundProject || null);

        // Scroll to top when project changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">{t('projects.notFound')}</h1>
                        <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
                            <ArrowLeft size={16} />
                            {t('project.backToProjects')}
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
                    <div className="relative section-container pt-36 pb-16">
                        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                            <ArrowLeft size={16} />
                            {t('project.backToProjects')}
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-2 my-6">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                {project.category}
                            </span>
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {project.liveDemoUrl && (
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    {t('project.liveDemo')}
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
                                >
                                    <Github size={18} />
                                    {t('project.viewCode')}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Project Details */}
                <section className="section-container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">{t('project.overview')}</h2>
                                <p className="text-muted-foreground mb-4">
                                    {project.overview || `This project was developed to address the growing need for ${project.category.toLowerCase()} solutions 
                  in today's fast-paced digital landscape. Utilizing ${project.tags.join(", ")}, 
                  the application provides a seamless experience for users while maintaining high performance standards.`}
                                </p>
                                <p className="text-muted-foreground font-bold">
                                    {t('project.developmentProcess')}
                                </p>
                                <p className="text-muted-foreground">
                                    {project.developmentProcess || `This project has been developed within a company, thus the a lot of details are a part of the trade secret. More information will be provided upon proper request.`}
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">{t('project.features')}</h2>
                                <ul className="space-y-4">
                                    {(project.features || [
                                        { title: "Intuitive User Interface", description: "Designed with user experience as the top priority, featuring clean layouts and intuitive navigation." },
                                        { title: "Advanced Data Processing", description: "Leveraging modern algorithms to process and analyze data with high accuracy and speed." },
                                        { title: "Responsive Design", description: "Fully responsive across all devices, ensuring consistent functionality and appearance." }
                                    ]).map((feature, index) => (
                                        <li key={index} className="flex gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">{feature.title}</h3>
                                                <p className="text-muted-foreground">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-6">{t('project.gallery')}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {(project.gallery || [project.image, "https://images.unsplash.com/photo-1498050108023-c5249f4df085"]).slice(0, 2).map((image, index) => (
                                        <div key={index} className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {(project.gallery && project.gallery.length > 2) && (
                                    <div className="aspect-[21/9] bg-secondary/50 rounded-lg overflow-hidden">
                                        <img
                                            src={project.gallery[2]}
                                            alt={`${project.title} overview`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-card border border-border/50 rounded-xl p-6 sticky top-32">
                                <h3 className="text-xl font-bold mb-6">{t('project.details')}</h3>

                                <div className="space-y-4">
                                    {project.technicalDetails ? (
                                        Object.entries(project.technicalDetails).map(([key, value], index) => (
                                            <div key={index}>
                                                <h4 className="text-sm font-medium text-muted-foreground mb-1">{key}</h4>
                                                <p>{String(value)}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('project.type')}</h4>
                                                <p>{project.category}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('project.technologies')}</h4>
                                                <p>{project.tags.join(", ")}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('project.completed')}</h4>
                                                <p>{project.completedDate || "2023"}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('project.role')}</h4>
                                                <p>{project.role || "Frontend Developer"}</p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <h4 className="text-sm font-medium text-muted-foreground mb-4">{t('project.share')}</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Projects Section */}
                <section className="bg-secondary/20">
                    <div className="section-container py-20">
                        <h2 className="text-3xl font-display font-bold mb-12 text-center">{t('project.moreProjects')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects
                                .filter(p => p.id !== project.id)
                                .slice(0, 3)
                                .map(relatedProject => (
                                    <div key={relatedProject.id} className="animate-fade-in">
                                        <Link to={`/project/${relatedProject.id}`}>
                                            <div
                                                className={cn(
                                                    "group relative overflow-hidden rounded-xl bg-card hover-card",
                                                    "border border-border/50 h-full"
                                                )}
                                            >
                                                <div className="aspect-video w-full overflow-hidden">
                                                    <div
                                                        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                        style={{ backgroundImage: `url(${relatedProject.image})` }}
                                                    >
                                                    </div>
                                                </div>

                                                <div className="p-6">
                                                    <div className="mb-4 flex gap-2 flex-wrap">
                                                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                                            {relatedProject.category}
                                                        </span>
                                                    </div>

                                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                        {relatedProject.title}
                                                    </h3>

                                                    <p className="text-muted-foreground">
                                                        {relatedProject.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ViewProject;
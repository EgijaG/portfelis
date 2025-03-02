import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
    // Automation Projects
    {
        id: 1,
        title: "Enterprise Workflow Automation",
        description: "An advanced automation system integrating data analysis, workflow automation, and database management.",
        category: "Automation",
        image: "/images/demo.jpg",
        tags: ["React", "Node.js", "PostgreSQL", "AI Analytics"],
        completedDate: "2023",
        role: "Full Stack Developer",
        overview: "A large-scale system designed to automate enterprise workflows, analyze data, and manage databases efficiently.",
        developmentProcess: "",
        features: [
            { title: "AI-Driven Insights", description: "Uses machine learning for advanced data analytics." },
            { title: "Process Automation", description: "Automates complex business workflows seamlessly." },
            { title: "Secure DB Management", description: "Ensures secure and efficient database handling." }
        ],
    },
    {
        id: 2,
        title: "Smart Task Automation Suite",
        description: "A cloud-based automation tool that optimizes task scheduling and execution with analytics.",
        category: "Automation",
        image: "/images/demo.jpg",
        tags: ["Vue.js", "Django", "Redis", "Celery"],
        completedDate: "2024",
        role: "Backend Developer",
        overview: "A robust solution for businesses looking to automate daily operations and optimize productivity.",
        developmentProcess: "",
        features: [
            { title: "Automated Task Scheduling", description: "Uses AI to prioritize and execute tasks efficiently." },
            { title: "Real-Time Monitoring", description: "Provides a real-time dashboard for automation tracking." },
            { title: "API Integrations", description: "Supports multiple third-party integrations." }
        ],
    },

    // Frontend Projects (Crypto, Media Studies, Test)
    {
        id: 3,
        title: "Crypto project introduction",
        description: "A sleek and responsive frontend for NFT launch of a crypto company.",
        category: "Crypto",
        image: "/images/everherd/everherd.png",
        tags: ["Next.js", "WebSockets", "TailwindCSS"],
        completedDate: "2023",
        role: "Frontend Developer",
        overview: "A feature-rich dashboard for crypto traders with real-time updates and portfolio tracking.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/crypto-dashboard",
        gallery: ['/images/everherd/everherd.png', '/images/everherd/everherd2.png', '/images/everherd/everherd3.png', '/images/everherd/everherd4.png', '/images/everherd/everherd5.png']
    },
    {
        id: 4,
        title: "Crypto Wallet",
        description: "A frontend platform for buying, selling, and showcasing NFTs.",
        category: "Crypto",
        image: "/images/leyyer/leyyer_dashboard.png",
        tags: ["React", "GraphQL", "Styled Components"],
        completedDate: "2023",
        role: "Frontend Developer",
        overview: "A highly interactive NFT marketplace with seamless user experience and transactions.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/nft-marketplace",
        gallery: ["/images/leyyer/leyyer dashboard.png", "/images/leyyer/leyyer_account.png", "/images/leyyer/leyyer_history.png", "/images/leyyer/leyyer_settings.png", "/images/leyyer/leyyer_staking.png"]
    },
    {
        id: 5,
        title: "DeFi Portfolio Manager",
        description: "A DeFi-focused frontend application for tracking decentralized finance investments.",
        category: "Crypto",
        image: "/images/rucapen/rucapen-coin.png",
        tags: ["Vue.js", "TypeScript", "Ethers.js"],
        completedDate: "2024",
        role: "Frontend Developer",
        overview: "A powerful tool for monitoring and optimizing DeFi portfolios across multiple chains.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/defi-portfolio",
        gallery: ["/images/rucapen/rucapen-coin.png", "/images/rucapen/rucapen-coin-2.png", "/images/rucapen/rucapen-coin-3.png",]
    },
    {
        id: 6,
        title: "SSE Riga Media Studies Centre Webpage",
        description: "A frontend application designed for managing and showcasing media education projects.",
        category: "Education",
        image: "/images/sser/sser.png",
        tags: ["Wordpress", "CPanel", "PHP", "Mailchimp"],
        completedDate: "2021",
        role: "Full-stack Developer",
        overview: "A blog type platform for media studies projects, applications, and information management.",
        developmentProcess: "",
        features: [
            { title: "Wordpress", description: "Admin side in Wordpress system." },
            { title: "Design", description: "Handcrafted design in collaboration with the centre in accordance with SSE Riga design book." },
            { title: "Application forms", description: "Main focus in this page is to show informative content and manage forms, applications to newsletter." },
            { title: "Integration", description: "Automated pipeline with Mailchimp allows users to register straight to the e-mail list without extra steps." }
        ],
        liveDemoUrl: "https://mediacentre.sseriga.edu/",
        gallery: ["/images/sser/sser.png", "/images/sser/sser2.png", "/images/sser/sser3.png"]
    },
    {
        id: 7,
        title: "Frontend Test Project",
        description: "A test project showcasing cutting-edge UI/UX techniques and animations.",
        category: "Education",
        image: "/images/demo.jpg",
        tags: ["Svelte", "Framer Motion", "TailwindCSS"],
        completedDate: "2024",
        role: "Frontend Developer",
        overview: "An experimental project pushing the boundaries of frontend development.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/frontend-test"
    },

    // AI Projects (LLMs & ML Image Processing)
    {
        id: 8,
        title: "AI Text Summarization Tool",
        description: "A powerful LLM-based tool that generates concise summaries from lengthy documents.",
        category: "Artificial Intelligence",
        image: "/images/demo.jpg",
        tags: ["Python", "OpenAI API", "FastAPI"],
        completedDate: "2023",
        role: "AI Developer",
        overview: "Utilizes LLMs to extract key information and generate summaries from large text inputs.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/text-summarization"
    },
    {
        id: 9,
        title: "AI Image Enhancement Suite",
        description: "An ML-powered application for enhancing image quality and resolution.",
        category: "Artificial Intelligence",
        image: "/images/demo.jpg",
        tags: ["TensorFlow", "OpenCV", "Flask"],
        completedDate: "2024",
        role: "ML Engineer",
        overview: "Uses deep learning models to upscale and enhance image details with precision.",
        developmentProcess: "",
        features: [
            { title: "Real-time Price Updates", description: "Live updates using WebSockets." },
            { title: "Trade Execution", description: "Enables seamless buying and selling of cryptocurrencies." },
            { title: "Dark Mode UI", description: "Customizable interface with dark mode." }
        ],
        liveDemoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/image-enhancement"
    }
];

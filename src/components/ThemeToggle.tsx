
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);

        if (initialTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                "hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "dark:focus:ring-offset-background"
            )}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <Sun className={cn(
                "h-5 w-5 transition-all",
                theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
            )} />
            <Moon className={cn(
                "absolute h-5 w-5 transition-all",
                theme === "light" ? "scale-0 opacity-0" : "scale-100 opacity-100"
            )} />
        </button>
    );
}

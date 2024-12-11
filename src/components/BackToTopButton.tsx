'use client';

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Button onClick={scrollToTop} className={cn("transition-transform translate-y-20 duration-300 ease-in-out", isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 pointer-events-none')}>
            <ArrowUp />
        </Button>
    )
}
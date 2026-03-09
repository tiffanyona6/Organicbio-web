"use client";

import { useEffect, useRef, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TimelineItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isLast?: boolean;
    delay?: number;
}

export default function TimelineItem({ icon, title, description, isLast, delay = 0 }: TimelineItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.2 }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={domRef}
            className={cn(
                "flex flex-col items-center text-center relative transition-all duration-1000 ease-out translate-y-8 opacity-0",
                isVisible && "translate-y-0 opacity-100"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Icon Wrapper */}
            <div
                className={cn(
                    "w-[88px] h-[88px] rounded-full flex items-center justify-center text-white shadow-md mb-6 ring-[10px] ring-white z-10 transition-all duration-700 delay-300",
                    isVisible ? "bg-[#7a9d34] scale-100" : "bg-gray-200 scale-90"
                )}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="z-10 bg-white pt-2 pb-8 md:pb-0">
                <h3 className="text-[19px] md:text-[18px] font-bold text-[#0f172a] mb-3 md:mb-2">{title}</h3>
                <p className="text-[15px] text-[#64748b] leading-relaxed max-w-[280px] mx-auto">
                    {description}
                </p>
            </div>

            {/* Mobile Line Segment (Below this item's text, pointing to next icon) */}
            {!isLast && (
                <div className="block md:hidden absolute bottom-0 left-1/2 w-[1px] h-[48px] overflow-hidden -z-10 translate-y-full">
                    <div
                        className={cn(
                            "w-full h-full bg-[#E2E8F0] transition-transform duration-1000 ease-in-out origin-top scale-y-0",
                            isVisible && "scale-y-100"
                        )}
                        style={{ transitionDelay: '700ms' }}
                    />
                </div>
            )}
        </div>
    );
}

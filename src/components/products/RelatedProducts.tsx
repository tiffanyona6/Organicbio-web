"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Product {
    id: string;
    image: string;
}

interface RelatedProductsProps {
    currentId: string;
    allProducts: Product[];
    translations: {
        title: string;
        cta: string;
        names: Record<string, string>;
        descs: Record<string, string>;
    };
}

export default function RelatedProducts({ 
    currentId, 
    allProducts, 
    translations 
}: RelatedProductsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Pick 4 "seemingly random" but deterministic products based on currentId
    // This avoids Math.random() in render/memo paths while keeping consistency
    const related = useMemo(() => {
        const filtered = allProducts.filter(p => p.id !== currentId);
        
        // Simple hash function to create a sorting seed
        const getSeed = (str: string) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash |= 0;
            }
            return hash;
        };

        const currentSeed = getSeed(currentId);

        return [...filtered]
            .sort((a, b) => {
                const seedA = getSeed(a.id + currentSeed);
                const seedB = getSeed(b.id + currentSeed);
                return seedA - seedB;
            })
            .slice(0, 4);
    }, [currentId, allProducts]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // On mobile clientWidth is full width of 1 card + gap
            const scrollAmount = clientWidth; 
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (related.length === 0) return null;

    return (
        <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-org-dark tracking-tight">{translations.title}</h2>
                
                {/* Mobile Arrows Controls */}
                <div className="flex gap-2 lg:hidden">
                    <button 
                        onClick={() => scroll('left')}
                        aria-label="Anterior"
                        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 active:scale-95 transition-all bg-white shadow-sm"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        aria-label="Siguiente"
                        className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 active:scale-95 transition-all bg-white shadow-sm"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            {/* Slider / Grid Container */}
            <div className="relative group">
                <div 
                    ref={scrollRef}
                    className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                    {related.map((product) => (
                        <div 
                            key={product.id} 
                            className="min-w-[85%] sm:min-w-[45%] lg:min-w-0 snap-center group/card"
                        >
                            <div className="bg-white rounded-[24px] border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:border-green-org/20 h-full flex flex-col group-hover/card:-translate-y-1">
                                <Link 
                                    href={`/productos/${product.id}`} 
                                    className="block relative aspect-[4/3] rounded-[20px] overflow-hidden mb-5 bg-gray-50"
                                >
                                    <Image
                                        src={product.image}
                                        alt={translations.names[product.id] || product.id}
                                        fill
                                        className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                </Link>
                                
                                <div className="px-1 flex flex-col flex-1">
                                    <h3 className="font-bold text-gray-org-dark text-[19px] mb-2 line-clamp-1 group-hover/card:text-green-org transition-colors">
                                        {translations.names[product.id] || product.id}
                                    </h3>
                                    <p className="text-[14px] text-gray-500 mb-6 line-clamp-2 leading-relaxed flex-1">
                                        {translations.descs[product.id] || ""}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-gray-50 mt-auto">
                                        <Link 
                                            href={`/productos/${product.id}`} 
                                            className="inline-flex items-center text-[15px] font-bold text-green-org hover:gap-3 transition-all gap-2 group/btn"
                                        >
                                            {translations.cta} 
                                            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

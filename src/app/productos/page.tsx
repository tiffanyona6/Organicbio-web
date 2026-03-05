"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Dummy data based on the briefing
const products = [
    { id: "tomate-rama", name: "Tomate Rama", category: "Hortalizas", cert: "Bio", ref: "ORG-001", shortDesc: "Tomate ecológico de rama con sabor intenso." },
    { id: "pimiento-california", name: "Pimiento California", category: "Hortalizas", cert: "Bio", ref: "ORG-002", shortDesc: "Pimiento orgánico de pared gruesa y color brillante." },
    { id: "calabacin-verde", name: "Calabacín Verde", category: "Hortalizas", cert: "Bio", ref: "ORG-003", shortDesc: "Calabacín verde cilíndrico, tierno y sin manchas." },
    { id: "pepino-almeria", name: "Pepino Almería", category: "Hortalizas", cert: "Bio", ref: "ORG-004", shortDesc: "Pepino tipo holandés, recto y de color oscuro." },
    { id: "sandia-negra", name: "Sandía Negra", category: "Frutas", cert: "Bio", ref: "ORG-005", shortDesc: "Sandía negra sin pepitas, dulce y crujiente." },
];

export default function Productos() {
    const [activeCategory, setActiveCategory] = useState("Todas");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "Todas" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ["Todas", "Hortalizas", "Frutas"];

    return (
        <div className="py-8 lg:py-12">
            <div className="container-global">

                {/* Toolbar */}
                <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                    {/* Filters */}
                    <div className="flex w-full md:w-auto items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "bg-green-org text-white shadow-sm"
                                        : "bg-white text-gray-500 hover:bg-gray-50 border border-transparent hover:border-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-[280px] lg:w-[320px]">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-green-org/20 focus:border-green-org transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-green-org/30">
                                <Link href={`/productos/${product.id}`} className="block relative aspect-square bg-gray-100 overflow-hidden">
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                                        Foto {product.name}
                                    </div>
                                    {/* Tag */}
                                    <div className="absolute top-4 left-4 rounded-full bg-green-org px-3 py-1 text-xs font-bold text-white shadow-sm">
                                        {product.cert}
                                    </div>
                                </Link>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-org">{product.category}</div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-org-dark line-clamp-1">{product.name}</h3>
                                    <p className="mb-6 flex-1 text-sm text-gray-500 line-clamp-2">{product.shortDesc}</p>
                                    <Link href={`/productos/${product.id}`} className="w-full">
                                        <Button variant="secondary" className="w-full">Ver ficha</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-gray-500">
                        <p className="text-xl font-medium mb-2">No se encontraron productos.</p>
                        <p>Prueba con otra búsqueda o selecciona otra categoría.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

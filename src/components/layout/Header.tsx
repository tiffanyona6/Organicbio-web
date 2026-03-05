"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
            <div className="container-global flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Organic Bio Logo"
                        width={200}
                        height={120}
                        className="w-auto h-16 md:h-20"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-org-dark hover:text-green-org transition-colors text-[15px] font-medium">Inicio</Link>
                    <Link href="/productos" className="text-gray-org-dark hover:text-green-org transition-colors text-[15px] font-medium">Productos</Link>
                    <Link href="/compromiso" className="text-gray-org-dark hover:text-green-org transition-colors text-[15px] font-medium">Compromiso</Link>
                    <Link href="/sobre-organic-bio" className="text-gray-org-dark hover:text-green-org transition-colors text-[15px] font-medium">Sobre Organic Bio</Link>
                    <Link href="/contacto" className="text-gray-org-dark hover:text-green-org transition-colors text-[15px] font-medium">Contacto</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <select className="bg-transparent text-sm font-medium text-gray-org-dark outline-none cursor-pointer hover:text-green-org transition-colors">
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                        <option value="de">DE</option>
                    </select>

                    <button
                        className="md:hidden text-gray-org-dark hover:text-green-org transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                        <span className="sr-only">Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <nav className="flex flex-col container-global py-4 space-y-4">
                        <Link href="/" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>Inicio</Link>
                        <Link href="/productos" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>Productos</Link>
                        <Link href="/compromiso" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>Compromiso</Link>
                        <Link href="/sobre-organic-bio" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>Sobre Organic Bio</Link>
                        <Link href="/contacto" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>Contacto</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

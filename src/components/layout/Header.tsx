"use client";

import { Link, useRouter, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { cn } from '@/lib/utils';

const languages = [
    { code: 'es', label: 'Español', flag: 'es' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'de', label: 'Deutsch', flag: 'de' },
    { code: 'fr', label: 'Français', flag: 'fr' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const t = useTranslations('Header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsLangOpen(false);
    };

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-white">
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
                    <Link href="/" className={cn("text-[15px] font-medium transition-colors hover:text-green-org", isActive('/') ? "text-green-org" : "text-gray-org-dark")}>{t('home')}</Link>
                    <Link href="/productos" className={cn("text-[15px] font-medium transition-colors hover:text-green-org", isActive('/productos') ? "text-green-org" : "text-gray-org-dark")}>{t('products')}</Link>
                    <Link href="/compromiso" className={cn("text-[15px] font-medium transition-colors hover:text-green-org", isActive('/compromiso') ? "text-green-org" : "text-gray-org-dark")}>{t('commitment')}</Link>
                    <Link href="/sobre-organic-bio" className={cn("text-[15px] font-medium transition-colors hover:text-green-org", isActive('/sobre-organic-bio') ? "text-green-org" : "text-gray-org-dark")}>{t('about')}</Link>
                    <Link href="/contacto" className={cn("text-[15px] font-medium transition-colors hover:text-green-org", isActive('/contacto') ? "text-green-org" : "text-gray-org-dark")}>{t('contact')}</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Custom Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 bg-transparent text-sm font-bold text-gray-org-dark outline-none cursor-pointer hover:text-green-org transition-colors uppercase py-1"
                        >
                            <img
                                src={`https://flagcdn.com/w40/${languages.find(l => l.code === locale)?.flag}.png`}
                                alt=""
                                className="w-5 h-auto rounded-[2px] shadow-sm border border-gray-100"
                            />
                            <span className="hidden sm:inline">{locale}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14"
                                viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="3"
                                strokeLinecap="round" strokeLinejoin="round"
                                className={cn("transition-transform duration-200", isLangOpen ? "rotate-180" : "")}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isLangOpen && (
                            <>
                                {/* Click outside overlay */}
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setIsLangOpen(false)}
                                ></div>

                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20 animate-fade-in py-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                router.replace(pathname, { locale: lang.code });
                                                setIsLangOpen(false);
                                            }}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-gray-50",
                                                locale === lang.code ? "text-green-org font-bold bg-green-org/5" : "text-gray-org-dark font-medium"
                                            )}
                                        >
                                            <img
                                                src={`https://flagcdn.com/w40/${lang.flag}.png`}
                                                alt=""
                                                className="w-5 h-auto rounded-[2px] shadow-sm border border-gray-100"
                                            />
                                            <span>{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

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
                        <Link href="/" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>{t('home')}</Link>
                        <Link href="/productos" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>{t('products')}</Link>
                        <Link href="/compromiso" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>{t('commitment')}</Link>
                        <Link href="/sobre-organic-bio" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>{t('about')}</Link>
                        <Link href="/contacto" className="text-gray-org-dark hover:text-green-org transition-colors font-medium py-2" onClick={closeMenu}>{t('contact')}</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

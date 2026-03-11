"use client";

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');
    const headerT = useTranslations('Header');

    return (
        <div className="mt-auto w-full">
            <footer className="bg-green-org text-white rounded-t-[40px] w-full">
                <div className="container-global py-12 lg:py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-12 lg:mb-16">

                        {/* Col 1: Brand Section */}
                        <div className="flex flex-col items-start gap-5">
                            <Link href="/">
                                <Image
                                    src="/organicbio-logo-blanco-250x150.png"
                                    alt="Organic-Bio Logo"
                                    width={250}
                                    height={150}
                                    className="w-auto h-16 md:h-20"
                                />
                            </Link>
                            <p className="text-[15px] leading-relaxed text-white max-w-xs">
                                {t('description')}
                            </p>
                        </div>

                        {/* Col 2: Main Links */}
                        <div className="flex flex-col items-start lg:justify-self-center gap-5">
                            <h4 className="text-white font-bold text-lg">{t('menu')}</h4>
                            <ul className="flex flex-col gap-3 text-[15px] font-normal text-white w-full">
                                <li><Link href="/" className="hover:text-white transition-colors block">{headerT('home')}</Link></li>
                                <li><Link href="/productos" className="hover:text-white transition-colors block">{headerT('products')}</Link></li>
                                <li><Link href="/compromiso" className="hover:text-white transition-colors block">{headerT('commitment')}</Link></li>
                                <li><Link href="/sobre-organic-bio" className="hover:text-white transition-colors block">{headerT('about')}</Link></li>
                                <li><Link href="/contacto" className="hover:text-white transition-colors block">{headerT('contact')}</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Contact */}
                        <div className="flex flex-col items-start lg:justify-self-end gap-5">
                            <h4 className="text-white font-bold text-lg uppercase">{t('contact')}</h4>
                            <ul className="flex flex-col gap-4 text-[15px] font-normal text-white w-full">
                                <li className="flex items-start gap-3">
                                    <span className="text-white mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                    </span>
                                    <span className="leading-relaxed">{t('address')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                    </span>
                                    <a href="tel:+34664619949" className="hover:text-white transition-colors block">+34 664 619 949</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                    </span>
                                    <a href="mailto:info@organicbio.es" className="hover:text-white transition-colors block">info@organicbio.es</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Legal Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pt-8 border-t border-white/10 text-[14px] text-white">
                        <p className="text-center md:text-left">{t('rights')}</p>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <Link href="/privacidad" className="hover:text-white transition-colors text-center md:text-left">{t('privacy')}</Link>
                            <Link href="/terminos" className="hover:text-white transition-colors text-center md:text-left">{t('terms')}</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors text-center md:text-left">{t('cookies')}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

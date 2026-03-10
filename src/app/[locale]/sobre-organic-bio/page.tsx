"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SobreOrganicBio() {
    const t = useTranslations('SobreOrganicBio');

    return (
        <div className="w-full">

            {/* === HERO: Compact image banner (same as Compromiso) === */}
            <section className="relative w-full aspect-[2.2/1] md:aspect-[4.5/1] lg:aspect-[5.5/1] xl:aspect-[6.5/1] max-h-[320px] overflow-hidden flex items-center justify-center">
                <Image
                    src="/hero-image-organicbio.webp"
                    alt="Conócenos - Organic Bio"
                    fill
                    className="object-cover object-[center_35%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mt-8 md:mt-12">
                    {t('title')}
                </h1>
            </section>

            {/* === INTRO: Title + text block === */}
            <section className="bg-white py-10 md:py-16">
                <div className="container-global">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mx-auto mb-8 w-12 h-1 bg-[#EFBC3D] rounded-full"></div>
                        <p className="text-[19px] md:text-[22px] leading-[1.8] text-[#334155] font-light">
                            {t('intro')}
                        </p>
                    </div>
                </div>
            </section>

            {/* === OPERATIVA: Asymmetric bento grid layout === */}
            <section className="bg-[#FAF9F6] py-20 md:py-28">
                <div className="container-global">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-auto">

                        {/* Large text card — spans 7 cols */}
                        <div className="md:col-span-7 bg-white rounded-[28px] p-10 md:p-14 border border-gray-100 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#739831]"></span>
                                <span className="text-[12px] font-bold text-[#739831] uppercase tracking-[0.2em]">Operativa</span>
                            </div>
                            <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#334155]">
                                {t('description.p1')}
                            </p>
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#64748b]">
                                    {t('description.p2')}
                                </p>
                            </div>
                        </div>

                        {/* Image card — spans 5 cols */}
                        <div className="md:col-span-5 relative min-h-[320px] md:min-h-[auto] rounded-[28px] overflow-hidden shadow-lg">
                            <Image
                                src="/control-organicbio.webp"
                                alt="Control de calidad OrganicBio"
                                fill
                                className="object-cover"
                            />
                            {/* Location pill */}
                            <div className="absolute top-6 left-6 py-2.5 px-5 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center gap-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#739831" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                <span className="text-[13px] font-bold text-[#334155]">Almería, España</span>
                            </div>
                        </div>

                        {/* Stat card 1 — spans 4 cols */}
                        <div className="md:col-span-4 bg-[#739831] rounded-[28px] p-9 md:p-10 text-white flex flex-col justify-between min-h-[200px]">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 mb-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                            <div className="mt-6">
                                <p className="text-[42px] md:text-[50px] font-bold leading-none tracking-tight">100%</p>
                                <p className="text-[14px] text-white/70 font-semibold uppercase tracking-wider mt-2">Producción propia</p>
                            </div>
                        </div>

                        {/* Stat card 2 — spans 4 cols */}
                        <div className="md:col-span-4 bg-[#EFBC3D] rounded-[28px] p-9 md:p-10 text-white flex flex-col justify-between min-h-[200px]">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 mb-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            </div>
                            <div className="mt-6">
                                <p className="text-[42px] md:text-[50px] font-bold leading-none tracking-tight">+5</p>
                                <p className="text-[14px] text-white/70 font-semibold uppercase tracking-wider mt-2">Países europeos</p>
                            </div>
                        </div>

                        {/* Second image card — spans 4 cols */}
                        <div className="md:col-span-4 relative min-h-[200px] md:min-h-[auto] rounded-[28px] overflow-hidden shadow-lg">
                            <Image
                                src="/exportacion-organicbio.webp"
                                alt="Exportación OrganicBio"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* === VISIÓN: Image left, text right with vertical accent === */}
            <section className="bg-white py-20 md:py-28">
                <div className="container-global">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image side */}
                        <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl group">
                            <Image
                                src="/compromiso-produce.webp"
                                alt="Visión OrganicBio"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Text side */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-1 h-14 bg-[#739831] rounded-full"></span>
                                <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] tracking-tight leading-[1.15]">
                                    {t('vision.title')}
                                </h2>
                            </div>
                            <p className="text-[18px] md:text-[19px] leading-[1.8] text-[#334155] font-medium mb-6">
                                {t('vision.p1')}
                            </p>
                            <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#64748b]">
                                {t('vision.p2')}
                            </p>

                            {/* Visual key points */}
                            <div className="mt-10 flex flex-wrap gap-3">
                                {["Producción propia", "Trazabilidad total", "Estándares internacionales"].map((tag) => (
                                    <span key={tag} className="px-5 py-2.5 rounded-full bg-[#F4F7EB] text-[#739831] text-[13px] font-bold tracking-wide border border-[#739831]/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === MERCADOS: Light section coherent with brand === */}
            <section className="relative bg-[#FAF9F6] py-24 md:py-32 overflow-hidden">
                <div className="container-global relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Text side */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#EFBC3D]"></span>
                                <span className="text-[12px] font-bold text-[#739831] uppercase tracking-[0.2em]">Exportación B2B</span>
                            </div>
                            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-8">
                                {t('markets.title')}
                            </h2>
                            <p className="text-[18px] md:text-[19px] leading-[1.8] text-[#334155] mb-6">
                                {t('markets.p1')}
                            </p>
                            <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#64748b]">
                                {t('markets.p2')}
                            </p>

                            {/* Country badges */}
                            <div className="mt-12 flex flex-wrap gap-3">
                                {["Alemania", "Francia", "Países Bajos", "Suiza", "Reino Unido"].map((country) => (
                                    <span key={country} className="px-5 py-2.5 rounded-full border border-[#739831]/15 bg-[#F4F7EB] text-[#739831] text-[13px] font-semibold tracking-wide hover:bg-[#739831] hover:text-white transition-colors cursor-default">
                                        {country}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right side: Image with floating stat */}
                        <div className="relative">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl group">
                                <Image
                                    src="/control-produccion-ecologica-organicbio.webp"
                                    alt="Mercados europeos"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Floating stat */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-7 shadow-lg">
                                    <div className="flex items-center gap-5">
                                        <div className="text-[48px] font-bold text-[#739831] leading-none tracking-tighter">
                                            +5
                                        </div>
                                        <div className="border-l border-gray-200 pl-5">
                                            <p className="text-[#0f172a] font-bold text-[16px]">Países europeos</p>
                                            <p className="text-[#64748b] text-[14px]">Exportación activa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Compromiso() {
    const t = useTranslations('Compromiso');

    return (
        <div className="py-12 lg:py-20">
            {/* Hero Section */}
            <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-24">
                <div className="container-global text-center">
                    <div className="mx-auto mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#F3F7Ec] text-green-org ring-1 ring-green-org/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>

                    <h1 className="mb-6 text-[28px] md:text-4xl lg:text-[42px] tracking-tight text-gray-org-dark">
                        {t('hero.title')}
                    </h1>

                    <p className="mx-auto max-w-[900px] text-[16px] md:text-[18px] leading-[1.8] text-gray-500">
                        {t('hero.desc')}
                    </p>
                </div>
            </section>

            {/* Eco Production Section */}
            <section className="bg-[#FAF9F6] py-16 lg:py-24">
                <div className="container-global">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-stretch w-full">
                        {/* Text and Cards */}
                        <div>
                            <div className="mb-2 text-[13px] tracking-widest text-[#7a9d34] uppercase">
                                {t('ecoProduction.subtitle')}
                            </div>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight leading-tight">
                                {t('ecoProduction.title')}
                            </h2>
                            <p className="mb-10 text-[16px] md:text-[17px] leading-relaxed text-[#475569]">
                                {t('ecoProduction.desc')}
                            </p>

                            <div className="flex flex-col gap-4">
                                {/* Card 1 */}
                                <div className="flex bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6">
                                    <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EBF0D9] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3" /><path d="M12 10a6 6 0 0 1 6-6h3v2a6 6 0 0 1-6 6h-3" /><path d="M12 22V10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[18px] text-[#0f172a]">{t('ecoProduction.card1.title')}</h3>
                                        <p className="text-[14px] leading-relaxed text-[#475569]">
                                            {t('ecoProduction.card1.desc')}
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6">
                                    <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EBF0D9] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[18px] text-[#0f172a]">{t('ecoProduction.card2.title')}</h3>
                                        <p className="text-[14px] leading-relaxed text-[#475569]">
                                            {t('ecoProduction.card2.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl bg-gray-200">
                            <Image
                                src="/image-hero-organicbio.webp"
                                alt={t('ecoProduction.title')}
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-[#F4F5F0] rounded-2xl p-4 flex items-center shadow-lg border border-white">
                                <div className="mr-4 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-white text-[#7a9d34] shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="8" /><path d="M7.8 16.8 7 23l5-3 5 3-.8-6.2" /><polygon points="12 6 13.5 8.5 16.5 9 14.2 11 15 14 12 12.5 9 14 9.8 11 7.5 9 10.5 8.5" fill="currentColor" stroke="none" /></svg>
                                </div>
                                <p className="text-[13.5px] md:text-[14.5px] text-[#0f172a] leading-tight">
                                    {t('ecoProduction.imageBadge')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container-global">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* EU Organic Card */}
                        <div className="bg-[#FAF9F6] rounded-3xl p-10 md:p-14 text-center flex flex-col items-center border border-gray-100 shadow-sm">
                            <div className="mb-8 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/eu-logo.jpg"
                                    alt={t('certifications.eu.title')}
                                    width={140}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-4 text-2xl md:text-[28px] text-[#0f172a]">{t('certifications.eu.title')}</h3>
                            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#475569] max-w-[85%] mx-auto">
                                {t('certifications.eu.desc')}
                            </p>
                        </div>

                        {/* Global G.A.P. Card */}
                        <div className="bg-[#FAF9F6] rounded-3xl p-10 md:p-14 text-center flex flex-col items-center border border-gray-100 shadow-sm">
                            <div className="mb-8 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/global-gap-logo.png"
                                    alt={t('certifications.globalGap.title')}
                                    width={140}
                                    height={140}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-4 text-2xl md:text-[28px] text-[#0f172a]">{t('certifications.globalGap.title')}</h3>
                            <p className="text-[16px] md:text-[17px] leading-relaxed text-[#475569] max-w-[85%] mx-auto">
                                {t('certifications.globalGap.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traceability Section */}
            <section className="bg-[#FAF9F6] py-16 lg:py-24 border-t border-gray-100">
                <div className="container-global">
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight mb-4">
                            {t('traceability.title')}
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-[#475569]">
                            {t('traceability.subtitle')}
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-[#E2E8F0] z-0"></div>

                        {/* Mobile Vertical Line */}
                        <div className="block md:hidden absolute top-[10%] bottom-[10%] left-[50%] ml-[-1px] w-[2px] bg-[#E2E8F0] z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[90px] h-[90px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-lg mb-6 ring-8 ring-[#FAF9F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" /><path d="M16 18h-5" /><path d="M18 5a1 1 0 0 0-1 1v5.573" /><path d="M3 4h9l1 7.246" /><path d="M4 11V4" /><path d="M7 15h.01" /><path d="M8 10.1V4" /><circle cx="18" cy="18" r="2" /><circle cx="7" cy="15" r="5" /></svg>
                                </div>
                                <h3 className="text-[17px] md:text-[18px] text-[#0f172a] mb-2">{t('traceability.steps.step1.title')}</h3>
                                <p className="text-[14px] text-[#475569] px-2">{t('traceability.steps.step1.desc')}</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[90px] h-[90px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-lg mb-6 ring-8 ring-[#FAF9F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="5" x="2" y="3" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M10 12h4" /></svg>
                                </div>
                                <h3 className="text-[17px] md:text-[18px] text-[#0f172a] mb-2">{t('traceability.steps.step2.title')}</h3>
                                <p className="text-[14px] text-[#475569] px-2">{t('traceability.steps.step2.desc')}</p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[90px] h-[90px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-lg mb-6 ring-8 ring-[#FAF9F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>
                                </div>
                                <h3 className="text-[17px] md:text-[18px] text-[#0f172a] mb-2">{t('traceability.steps.step3.title')}</h3>
                                <p className="text-[14px] text-[#475569] px-2">{t('traceability.steps.step3.desc')}</p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[90px] h-[90px] rounded-full bg-[#efbc3d] flex items-center justify-center text-[#0f172a] shadow-lg mb-6 ring-8 ring-[#FAF9F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                                </div>
                                <h3 className="text-[17px] md:text-[18px] text-[#0f172a] mb-2">{t('traceability.steps.step4.title')}</h3>
                                <p className="text-[14px] text-[#475569] px-2">{t('traceability.steps.step4.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

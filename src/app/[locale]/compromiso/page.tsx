import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Compromiso() {
    const t = useTranslations('Compromiso');

    return (
        <div className="w-full">
            {/* Visual Mini Hero */}
            <section className="relative w-full aspect-[2.2/1] md:aspect-[4.5/1] lg:aspect-[5.5/1] xl:aspect-[6.5/1] max-h-[320px] overflow-hidden">
                <Image
                    src="/hero-compromiso-organicbio.webp"
                    alt="Cultivo ecológico de Organic Bio"
                    fill
                    className="object-cover object-[center_35%]"
                    priority
                />
            </section>

            {/* Hero Section */}
            <section className="bg-white py-10 md:py-16">
                <div className="container-global flex flex-col items-center md:flex-row md:items-start md:justify-center">
                    <div className="shrink-0 mb-6 md:mb-0 md:mr-6 flex h-[60px] w-[60px] md:h-[46px] md:w-[46px] items-center justify-center rounded-full bg-[#F3F7Ec] text-[#7a9d34] ring-1 ring-[#7a9d34]/10 md:mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-[32px] h-[32px] md:w-[24px] md:h-[24px]">
                            <circle cx="12" cy="9" r="6.5" />
                            <path d="M15.6 14.4 L17 22 l-5 -3 l-5 3 L8.4 14.4" />
                            <polygon points="12 4.5 13.4 8 16.8 8.2 14.1 10.4 15.2 13.6 12 11.5 8.8 13.6 9.9 10.4 7.2 8.2 10.6 8" />
                        </svg>
                    </div>

                    <div className="mx-auto md:mx-0 max-w-[700px] text-center md:text-left">
                        <h1 className="inline text-[17px] md:text-[19px] font-bold text-[#334155] leading-[1.7]">
                            {t('hero.title')}
                        </h1>
                        <p className="inline text-[17px] md:text-[19px] leading-[1.7] text-[#475569]">
                            {" "}{t('hero.desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Eco Production Section */}
            <section className="bg-white py-20 lg:py-32">
                <div className="container-global">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center w-full">
                        {/* Text and Cards */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-3 text-[13px] font-bold tracking-[0.2em] text-[#7a9d34] uppercase">
                                {t('ecoProduction.subtitle')}
                            </div>
                            <h2 className="mb-6 text-[32px] md:text-[40px] font-bold text-[#0f172a] tracking-tight leading-[1.15]">
                                {t('ecoProduction.title')}
                            </h2>
                            <p className="mb-10 text-[17px] leading-relaxed text-[#475569]">
                                {t('ecoProduction.desc')}
                            </p>

                            <div className="flex flex-col gap-5">
                                {/* Card 1 */}
                                <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-7 transition-all hover:shadow-md">
                                    <div className="mr-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#F4F7EB] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3" /><path d="M12 10a6 6 0 0 1 6-6h3v2a6 6 0 0 1-6 6h-3" /><path d="M12 22V10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[19px] font-bold text-[#0f172a]">{t('ecoProduction.card1.title')}</h3>
                                        <p className="text-[15px] leading-relaxed text-[#64748b]">
                                            {t('ecoProduction.card1.desc')}
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-7 transition-all hover:shadow-md">
                                    <div className="mr-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#F4F7EB] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[19px] font-bold text-[#0f172a]">{t('ecoProduction.card2.title')}</h3>
                                        <p className="text-[15px] leading-relaxed text-[#64748b]">
                                            {t('ecoProduction.card2.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-full min-h-[500px] w-full mt-6 lg:mt-0 lg:ml-6">
                            <div className="relative h-full w-full overflow-hidden rounded-[32px] shadow-lg">
                                <Image
                                    src="/compromiso-produce.webp"
                                    alt={t('ecoProduction.title')}
                                    fill
                                    className="object-cover"
                                />

                                {/* Inner Floating Card Badge */}
                                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                                    <div className="bg-[#F0F2ED] rounded-2xl py-5 px-6 md:py-7 md:px-8 flex items-center shadow-md">
                                        <div className="mr-4 md:mr-6 flex shrink-0 items-center justify-center text-[#688a2a]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="md:w-11 md:h-11">
                                                <circle cx="12" cy="9" r="6.5" />
                                                <path d="M15.6 14.4 L17 22 l-5 -3 l-5 3 L8.4 14.4" />
                                                <polygon points="12 4.5 13.4 8 16.8 8.2 14.1 10.4 15.2 13.6 12 11.5 8.8 13.6 9.9 10.4 7.2 8.2 10.6 8" />
                                            </svg>
                                        </div>
                                        <p className="text-[15px] md:text-[17px] font-bold text-[#1f2937] leading-snug">
                                            {t('ecoProduction.imageBadge')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-white py-20 lg:py-28">
                <div className="container-global">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* EU Organic Card */}
                        <div className="bg-[#FAF9F6] rounded-[32px] p-10 md:p-12 text-center flex flex-col items-center justify-center border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] h-full">
                            <div className="mb-6 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/eu-logo.jpg"
                                    alt={t('certifications.eu.title')}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-3 text-[24px] font-bold text-[#0f172a]">{t('certifications.eu.title')}</h3>
                            <p className="text-[16px] leading-relaxed text-[#64748b] max-w-[85%] mx-auto">
                                {t('certifications.eu.desc')}
                            </p>
                        </div>

                        {/* Global G.A.P. Card */}
                        <div className="bg-[#FAF9F6] rounded-[32px] p-10 md:p-12 text-center flex flex-col items-center justify-center border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] h-full">
                            <div className="mb-6 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/global-gap-logo.png"
                                    alt={t('certifications.globalGap.title')}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-3 text-[24px] font-bold text-[#0f172a]">{t('certifications.globalGap.title')}</h3>
                            <p className="text-[16px] leading-relaxed text-[#64748b] max-w-[85%] mx-auto">
                                {t('certifications.globalGap.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traceability Section */}
            <section className="bg-white py-16 lg:py-28 border-t border-gray-100">
                <div className="container-global">
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] tracking-tight mb-4 leading-tight">
                            {t('traceability.title')}
                        </h2>
                        <p className="text-[17px] md:text-[19px] text-[#64748b]">
                            {t('traceability.subtitle')}
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-[#E2E8F0] z-0"></div>

                        {/* Mobile Vertical Line */}
                        <div className="block md:hidden absolute top-[10%] bottom-[10%] left-[50%] ml-[-0.5px] w-[1px] bg-[#E2E8F0] z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[88px] h-[88px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-md mb-6 ring-[10px] ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" /><path d="M16 18h-5" /><path d="M18 5a1 1 0 0 0-1 1v5.573" /><path d="M3 4h9l1 7.246" /><path d="M4 11V4" /><path d="M7 15h.01" /><path d="M8 10.1V4" /><circle cx="18" cy="18" r="2" /><circle cx="7" cy="15" r="5" /></svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#0f172a] mb-2">{t('traceability.steps.step1.title')}</h3>
                                <p className="text-[15px] text-[#64748b] px-2 leading-relaxed">{t('traceability.steps.step1.desc')}</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[88px] h-[88px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-md mb-6 ring-[10px] ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="5" x="2" y="3" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M10 12h4" /></svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#0f172a] mb-2">{t('traceability.steps.step2.title')}</h3>
                                <p className="text-[15px] text-[#64748b] px-2 leading-relaxed">{t('traceability.steps.step2.desc')}</p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[88px] h-[88px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-md mb-6 ring-[10px] ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#0f172a] mb-2">{t('traceability.steps.step3.title')}</h3>
                                <p className="text-[15px] text-[#64748b] px-2 leading-relaxed">{t('traceability.steps.step3.desc')}</p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-[88px] h-[88px] rounded-full bg-[#7a9d34] flex items-center justify-center text-white shadow-md mb-6 ring-[10px] ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#0f172a] mb-2">{t('traceability.steps.step4.title')}</h3>
                                <p className="text-[15px] text-[#64748b] px-2 leading-relaxed">{t('traceability.steps.step4.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

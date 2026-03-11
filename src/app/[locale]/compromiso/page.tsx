import { useTranslations } from "next-intl";
import Image from "next/image";
import TimelineItem from "@/components/ui/TimelineItem";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default function Compromiso() {
    const t = useTranslations('Compromiso');

    return (
        <div className="w-full">
            {/* Visual Mini Hero */}
            <section className="relative w-full aspect-[2.2/1] md:aspect-[4.5/1] lg:aspect-[5.5/1] xl:aspect-[6.5/1] max-h-[360px] overflow-hidden flex items-center justify-center">
                <Image
                    src="/hero-compromiso-organicbio.webp"
                    alt="Cultivo ecológico de Organic Bio"
                    fill
                    className="object-cover object-[center_35%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center px-4 mt-8 md:mt-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase">
                        {t('hero.title')}
                    </h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-white py-12 md:py-20">
                <div className="container-global">
                    {/* Green accent line */}
                    <div className="mx-auto w-12 h-1 bg-green-org rounded-full mb-10"></div>

                    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center">
                        <div className="shrink-0 mb-6 md:mb-0 md:mr-8 flex h-[60px] w-[60px] md:h-[54px] md:w-[54px] items-center justify-center rounded-full bg-[#F3F7Ec] text-green-org ring-1 ring-green-org/10 md:mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-[32px] h-[32px] md:w-[28px] md:h-[28px]">
                                <circle cx="12" cy="9" r="6.5" />
                                <path d="M15.6 14.4 L17 22 l-5 -3 l-5 3 L8.4 14.4" />
                                <polygon points="12 4.5 13.4 8 16.8 8.2 14.1 10.4 15.2 13.6 12 11.5 8.8 13.6 9.9 10.4 7.2 8.2 10.6 8" />
                            </svg>
                        </div>

                        <div className="mx-auto md:mx-0 max-w-[800px] text-center md:text-left">
                            <p className="text-[19px] md:text-[22px] leading-[1.8] text-[#334155] font-light">
                                {t('hero.intro')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eco Production Section — White */}
            <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
                <div className="container-global relative z-10">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center w-full">
                        {/* Image Side - Now first on mobile, last on desktop */}
                        <div className="relative h-[280px] lg:h-full lg:min-h-[500px] w-full lg:ml-6 lg:order-last">
                            <div className="relative h-full w-full overflow-hidden rounded-[32px] shadow-lg">
                                <Image
                                    src="/compromiso-produccion-organicbio.webp"
                                    alt={t('ecoProduction.title')}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Text and Cards - Now last on mobile, first on desktop */}
                        <div className="flex flex-col justify-center lg:order-first">
                            <div className="mb-3 text-[13px] font-bold tracking-[0.2em] text-[#7a9d34] uppercase">
                                {t('ecoProduction.subtitle')}
                            </div>
                            <h2 className="mb-6 text-[32px] md:text-[40px] font-bold text-gray-600 tracking-tight leading-[1.15]">
                                {t('ecoProduction.title')}
                            </h2>
                            <p className="mb-10 text-[17px] leading-relaxed text-[#475569]">
                                {t('ecoProduction.desc')}
                            </p>

                            <div className="flex flex-col gap-5">
                                {/* Card 1 */}
                                <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-7 transition-all hover:shadow-md hover:border-[#7a9d34]/30">
                                    <div className="mr-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#F4F7EB] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3" /><path d="M12 10a6 6 0 0 1 6-6h3v2a6 6 0 0 1-6 6h-3" /><path d="M12 22V10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[19px] font-bold text-gray-600">{t('ecoProduction.card1.title')}</h3>
                                        <p className="text-[15px] leading-relaxed text-[#64748b]">
                                            {t('ecoProduction.card1.desc')}
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-7 transition-all hover:shadow-md hover:border-[#7a9d34]/30">
                                    <div className="mr-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#F4F7EB] text-[#7a9d34]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[19px] font-bold text-gray-600">{t('ecoProduction.card2.title')}</h3>
                                        <p className="text-[15px] leading-relaxed text-[#64748b]">
                                            {t('ecoProduction.card2.desc')}
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-7 transition-all hover:shadow-md hover:border-[#7a9d34]/30">
                                    <div className="mr-6 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#F4F7EB] text-green-org">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-[19px] font-bold text-gray-600">{t('ecoProduction.card3.title')}</h3>
                                        <p className="text-[15px] leading-relaxed text-[#64748b]">
                                            {t('ecoProduction.card3.desc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traceability Section — Dark Green Background */}
            <section className="bg-gradient-to-b from-[#739831] to-[#5a7a26] py-20 lg:py-28 relative overflow-hidden">

                <div className="container-global relative z-10">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-flex items-center justify-center px-5 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                            <span className="text-[13px] font-bold text-[#EFBC3D] tracking-[0.15em] uppercase">Del campo al destino</span>
                        </div>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight mb-4 leading-tight">
                            {t('traceability.title')}
                        </h2>
                        <p className="text-[17px] md:text-[19px] text-white/70">
                            {t('traceability.subtitle')}
                        </p>
                        {/* Decorative line */}
                        <div className="mt-6 mx-auto w-16 h-1 bg-[#EFBC3D] rounded-full"></div>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-white/20 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
                            {/* Step 1 */}
                            <TimelineItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" /><path d="M16 18h-5" /><path d="M18 5a1 1 0 0 0-1 1v5.573" /><path d="M3 4h9l1 7.246" /><path d="M4 11V4" /><path d="M7 15h.01" /><path d="M8 10.1V4" /><circle cx="18" cy="18" r="2" /><circle cx="7" cy="15" r="5" /></svg>}
                                title={t('traceability.steps.step1.title')}
                                description={t('traceability.steps.step1.desc')}
                                delay={100}
                                variant="dark"
                            />

                            {/* Step 2 */}
                            <TimelineItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="5" x="2" y="3" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M10 12h4" /></svg>}
                                title={t('traceability.steps.step2.title')}
                                description={t('traceability.steps.step2.desc')}
                                delay={200}
                                variant="dark"
                            />

                            {/* Step 3 */}
                            <TimelineItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>}
                                title={t('traceability.steps.step3.title')}
                                description={t('traceability.steps.step3.desc')}
                                delay={300}
                                variant="dark"
                            />

                            {/* Step 4 */}
                            <TimelineItem
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>}
                                title={t('traceability.steps.step4.title')}
                                description={t('traceability.steps.step4.desc')}
                                delay={400}
                                isLast
                                variant="dark"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section — White */}
            <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
                <div className="container-global relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center px-5 py-2 bg-[#739831]/10 rounded-full mb-6">
                            <span className="text-[13px] font-bold text-[#739831] tracking-[0.15em] uppercase">Estándares de calidad</span>
                        </div>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-gray-600 tracking-tight mb-4">
                            {t('certifications.title')}
                        </h2>
                        <p className="text-[17px] md:text-[19px] text-[#64748b] leading-relaxed">
                            {t('certifications.desc')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* EU Organic Card */}
                        <div className="bg-white rounded-[32px] p-10 md:p-12 text-center flex flex-col items-center justify-center border border-[#739831]/10 shadow-[0_4px_24px_-4px_rgba(115,152,49,0.08)] hover:shadow-[0_8px_32px_-4px_rgba(115,152,49,0.15)] transition-all duration-300 h-full group">
                            <div className="mb-6 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/eu-logo.jpg"
                                    alt={t('certifications.eu.title')}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-3 text-[24px] font-bold text-gray-600">{t('certifications.eu.title')}</h3>
                            <p className="text-[16px] leading-relaxed text-[#64748b] max-w-[85%] mx-auto">
                                {t('certifications.eu.desc')}
                            </p>
                            <div className="mt-6 w-12 h-1 bg-[#739831] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Global G.A.P. Card */}
                        <div className="bg-white rounded-[32px] p-10 md:p-12 text-center flex flex-col items-center justify-center border border-[#739831]/10 shadow-[0_4px_24px_-4px_rgba(115,152,49,0.08)] hover:shadow-[0_8px_32px_-4px_rgba(115,152,49,0.15)] transition-all duration-300 h-full group">
                            <div className="mb-6 mix-blend-multiply flex items-center justify-center">
                                <Image
                                    src="/global-gap-logo.png"
                                    alt={t('certifications.globalGap.title')}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="mb-3 text-[24px] font-bold text-gray-600">{t('certifications.globalGap.title')}</h3>
                            <p className="text-[16px] leading-relaxed text-[#64748b] max-w-[85%] mx-auto">
                                {t('certifications.globalGap.desc')}
                            </p>
                            <div className="mt-6 w-12 h-1 bg-[#739831] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section — Soft Green Background Background */}
            <section className="bg-gradient-to-br from-[#f0f5e8] via-[#f5f8ef] to-[#eef3e4] py-20 lg:py-28 relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#739831]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#EFBC3D]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                <div className="container-global text-center relative z-10">
                    {/* Yellow accent line */}
                    <div className="mx-auto w-16 h-1 bg-[#EFBC3D] rounded-full mb-8"></div>
                    <h2 className="text-[32px] md:text-[40px] font-bold text-gray-600 tracking-tight mb-6">
                        {t('footer.title')}
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-[#475569] max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t('footer.desc')}
                    </p>
                    <Link href="/contacto">
                        <Button size="lg" className="px-10 py-6 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                            {t('footer.cta')}
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contacto() {
    const t = useTranslations('Contacto');

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Banner */}
            <section className="relative w-full aspect-[2.2/1] md:aspect-[4.5/1] lg:aspect-[5.5/1] xl:aspect-[6.5/1] max-h-[320px] overflow-hidden flex items-center justify-center">
                <Image
                    src="/hero-image-organicbio.webp"
                    alt="Contacto - Organic Bio"
                    fill
                    className="object-cover object-[center_35%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mt-8 md:mt-12">
                    {t('title')}
                </h1>
            </section>

            {/* Green accent line */}
            <div className="pt-10 md:pt-16">
                <div className="mx-auto w-12 h-1 bg-green-org rounded-full"></div>
            </div>

            <div className="container-global py-16 lg:py-24">

                {/* Contact Banner Image */}
                <div className="relative w-full aspect-[21/9] md:aspect-[25/7] mb-12 md:mb-16 rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
                    <Image
                        src="/card-contacto-organicbio.webp"
                        alt="Contact Organic Bio"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Top Grid: 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">

                    {/* Sede Central */}
                    <div className="bg-gray-50/50 rounded-[32px] p-8 lg:p-10 border border-gray-100 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-org border border-gray-100 shadow-sm mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-4">{t('cards.hq.title')}</h3>
                        <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                            {t('cards.hq.address').split(', ').map((part, i) => (
                                <span key={i}>
                                    {part}
                                    {i < t('cards.hq.address').split(', ').length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>

                    {/* Email Directo */}
                    <div className="bg-gray-50/50 rounded-[32px] p-8 lg:p-10 border border-gray-100 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-org border border-gray-100 shadow-sm mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-2">{t('cards.email.title')}</h3>
                        <a href="mailto:info@organicbio.es" className="text-green-org font-bold hover:underline mb-2 block">info@organicbio.es</a>
                        <p className="text-[13px] text-gray-400 font-normal">{t('cards.email.desc')}</p>
                    </div>

                    {/* Teléfono */}
                    <div className="bg-gray-50/50 rounded-[32px] p-8 lg:p-10 border border-gray-100 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-org border border-gray-100 shadow-sm mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-2">{t('cards.phone.title')}</h3>
                        <a href="tel:+34664619949" className="text-green-org font-bold hover:underline mb-2 block">+34 664 619 949</a>
                        <p className="text-[13px] text-gray-400 font-normal text-start">{t('cards.phone.hours')}</p>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-gray-50/50 rounded-[32px] p-8 lg:p-10 border border-gray-100 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-org border border-gray-100 shadow-sm mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-2">{t('cards.whatsapp.title')}</h3>
                        <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="text-green-org font-bold hover:underline mb-2 block">+34 600 000 000</a>
                        <p className="text-[13px] text-gray-400 font-normal">{t('cards.whatsapp.desc')}</p>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[350px] md:h-[400px] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 mb-20">
                    <iframe
                        src="https://maps.google.com/maps?q=Calle%20Alcudia%20de%20Monteagud%2023,%2004009%20Almer%C3%ADa,%20Espa%C3%B1a&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación sede Organic Bio"
                    ></iframe>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mb-20" />

                {/* Bottom Grid: 3 Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Soporte 24/7 */}
                    <div className="flex items-start gap-4">
                        <div className="text-green-org mt-1 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-org-dark text-lg mb-2">{t('features.support.title')}</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                                {t('features.support.desc')}
                            </p>
                        </div>
                    </div>

                    {/* Asesoría Técnica */}
                    <div className="flex items-start gap-4">
                        <div className="text-green-org mt-1 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-org-dark text-lg mb-2">{t('features.advice.title')}</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                                {t('features.advice.desc')}
                            </p>
                        </div>
                    </div>

                    {/* Gestión Logística */}
                    <div className="flex items-start gap-4">
                        <div className="text-green-org mt-1 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-org-dark text-lg mb-2">{t('features.logistics.title')}</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
                                {t('features.logistics.desc')}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

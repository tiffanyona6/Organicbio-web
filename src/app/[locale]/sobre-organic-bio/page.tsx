import { useTranslations } from "next-intl";

export default function SobreOrganicBio() {
    const t = useTranslations('SobreOrganicBio');

    return (
        <div className="py-12 lg:py-20">
            {/* Intro Section */}
            <section className="container-global mb-20 text-center">
                <h1 className="mb-6 text-4xl font-extrabold text-gray-org-dark md:text-5xl">{t('intro.title')}</h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                    {t('intro.desc')}
                </p>
            </section>

            {/* Two Column details */}
            <section className="container-global mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="aspect-[4/3] rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden relative">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-green-org/5"></div>
                        <span className="text-gray-400 font-bold text-xl relative z-10">{t('imageLabel')}</span>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-org-dark mb-4">{t('history.title')}</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {t('history.p1')}
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                {t('history.p2')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                            <div>
                                <h4 className="font-bold text-gray-org-dark mb-1 text-2xl">100%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{t('stats.production')}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-org-dark mb-1 text-2xl">+15</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{t('stats.countries')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & Markets */}
            <section className="bg-gray-50 py-20">
                <div className="container-global">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-6">{t('infrastructure.title')}</h3>
                            <p className="text-gray-600 mb-6">
                                {t('infrastructure.desc')}
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> {t('infrastructure.list.item1')}</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> {t('infrastructure.list.item2')}</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> {t('infrastructure.list.item3')}</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> {t('infrastructure.list.item4')}</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-6">{t('markets.title')}</h3>
                            <p className="text-gray-600 mb-6">
                                {t('markets.desc')}
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                {['Alemania', 'Reino Unido', 'Francia', 'Holanda', 'Suiza', 'Países Nórdicos'].map((country, index) => (
                                    <span key={index} className="px-4 py-2 rounded-full bg-green-org/10 text-green-org font-medium text-sm">
                                        {t(`markets.countries.${index}`)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

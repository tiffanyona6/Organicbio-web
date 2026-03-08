"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  const tProd = useTranslations('Productos');

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[85vh] md:min-h-screen items-center justify-center bg-cover bg-center overflow-hidden px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.55)), url('/image-hero-organicbio.webp')"
        }}
      >
        <div className="container-global relative z-20 max-w-5xl text-center md:text-left">
          <h1 className="hero-title mb-6 text-white drop-shadow-2xl animate-fade-in-up">
            {t.rich('hero.title', {
              br: () => <br />,
              span: (chunks) => <span className="italic font-normal brightness-125 text-green-org">{chunks}</span>
            })}
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-gray-200 max-w-3xl font-light tracking-wide drop-shadow-md animate-fade-in-up animation-delay-200">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Link href="/productos">
              <Button className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all">{t('hero.cta')}</Button>
            </Link>
            <Link href="/sobre-organic-bio">
              <Button variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">{t('hero.about')}</Button>
            </Link>
          </div>
        </div>

        {/* Subtle bottom fade to transition into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-org to-transparent z-10" />
      </section>

      {/* Intro Quote Section */}
      <section className="bg-[#FAF9F6] py-16 md:py-24">
        <div className="container-global text-center max-w-4xl mx-auto">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-org/10 text-green-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-org-dark leading-tight tracking-tight">
            {t.rich('introQuote', {
              green: (chunks) => <span className="text-green-org">{chunks}</span>
            })}
          </h2>
          <div className="mt-8 mx-auto w-16 h-1 bg-[#EFBC3D] rounded-full"></div>
        </div>
      </section>

      {/* 3 Value Cards Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container-global">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8">

            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-8 lg:p-10 bg-[#FAFAFA] rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-green-org/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF0D8] text-green-org">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="mb-4 text-[#1a202c] text-lg lg:text-xl font-bold">{t('proofs.eco.title')}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#64748b] mb-8 max-w-sm">{t('proofs.eco.desc')}</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-green-org uppercase tracking-wider">
                {t('proofs.eco.footer')} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-8 lg:p-10 bg-[#FAFAFA] rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-yellow-org/30">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FCF4DF] text-yellow-org">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" /><path d="M11 11h9l1.5 3v5a1 1 0 0 1-1 1h-1" /><rect width="2" height="6" x="5" y="11" rx="1" /><rect width="14" height="6" x="7" y="11" rx="1" /><path d="M7 17h.01" /><path d="M17 17h.01" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
              </div>
              <h3 className="mb-4 text-[#1a202c] text-lg lg:text-xl font-bold">{t('proofs.control.title')}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#64748b] mb-8 max-w-sm">{t('proofs.control.desc')}</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-green-org uppercase tracking-wider">
                {t('proofs.control.footer')} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-8 lg:p-10 bg-[#FAFAFA] rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-green-org/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF0D8] text-green-org">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </div>
              <h3 className="mb-4 text-[#1a202c] text-lg lg:text-xl font-bold">{t('proofs.export.title')}</h3>
              <p className="text-[14.5px] leading-relaxed text-[#64748b] mb-8 max-w-sm">{t('proofs.export.desc')}</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-green-org uppercase tracking-wider">
                {t('proofs.export.footer')} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container-global">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-org-dark md:text-4xl">{t('products.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-500">{t('products.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: "tomate-rama", image: "/tomate-organicbio.webp" },
            { id: "pimiento-california-amarillo", image: "/pimientos-organicbio.webp" },
            { id: "calabacin", image: "/calabacín-organicbio.webp" }
          ].map((product) => (
            <div key={product.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-green-org/30">
              <Link href={`/productos/${product.id}`} className="block relative aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={tProd(`items.${product.id}.name`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6 text-left">
                <h3 className="mb-2 text-xl font-bold text-gray-org-dark line-clamp-1">{tProd(`items.${product.id}.name`)}</h3>
                <p className="mb-6 flex-1 text-sm text-gray-500 line-clamp-2">{tProd(`items.${product.id}.desc`)}</p>
                <Link href={`/productos/${product.id}`} className="w-full mt-auto">
                  <Button variant="secondary" className="w-full">{tProd('viewDetails')}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Calendar Placeholder */}
      <section className="bg-white py-16">
        <div className="container-global text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-org-dark">{t('calendar.title')}</h2>
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-gray-500">
            {t('calendar.placeholder')}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container-global text-center">
        <h2 className="mb-8 text-2xl font-bold text-gray-org-dark">{t('certifications.title')}</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale">
          {/* Placeholders for logos */}
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
        </div>
      </section>

      {/* CTA Commitment Block */}
      <section className="container-global mt-16">
        <div className="bg-green-org rounded-[32px] overflow-hidden shadow-xl flex flex-col md:flex-row relative">

          {/* Subtle Star Pattern Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.15] z-0 hidden md:block"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 16v16M16 24h16' stroke='%23EFBC3D' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundSize: '64px 64px' }}
          />

          {/* Left Content */}
          <div className="w-full md:w-[45%] p-10 md:py-12 lg:py-14 md:px-12 lg:px-16 flex flex-col justify-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
              {t.rich('commitment.title', {
                br: () => <br />
              })}
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-lg relative z-10">
              {t('commitment.desc')}
            </p>
            <div className="relative z-10">
              <Link href="/compromiso">
                <Button className="bg-white text-green-org hover:bg-gray-50 h-12 px-8 text-[15px] font-bold shadow-md transition-all rounded-full border-none">
                  {t('commitment.cta')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%] relative min-h-[300px] md:min-h-[auto] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-green-org via-green-org/70 to-transparent pointer-events-none z-10 md:w-full" />
            <Image
              src="/compromiso-organicbio.webp"
              alt={t('commitment.title')}
              fill
              className="object-cover relative z-0"
            />
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section className="bg-gray-50 py-24 px-4 border-t border-gray-100 mt-10">
        <div className="container-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image Column */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image-organicbio.webp"
                alt={t('location.subtitle')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-yellow-org">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold font-sans tracking-tight">{t('location.subtitle')}</h3>
                </div>
                <p className="text-gray-300 text-xl ml-[44px]">{t('location.caption')}</p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl lg:text-[46px] font-bold text-gray-900 mb-8 leading-tight">
                {t.rich('location.title', {
                  span: (chunks) => (
                    <span className="relative whitespace-nowrap z-10 inline-block">
                      {chunks}
                      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-org"></span>
                    </span>
                  )
                })}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                {t('location.desc')}
              </p>

              <div className="flex flex-col gap-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-yellow-org mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 8h-3V4H3v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM8 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-5h-3V9h2.5l2 3v1h-1.5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1.5">{t('location.features.logistics.title')}</h4>
                    <p className="text-gray-500 text-lg">{t('location.features.logistics.desc')}</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-yellow-org mt-1 flex-shrink-0">
                    {/* Award Icon Custom Fill */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1.5">{t('location.features.quality.title')}</h4>
                    <p className="text-gray-500 text-lg">{t('location.features.quality.desc')}</p>
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

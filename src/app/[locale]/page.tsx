"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  const tProd = useTranslations('Productos');

  return (
    <div className="flex flex-col gap-12 pb-16">
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
      <section className="bg-[#FAF9F6] py-10 md:py-14">
        <div className="container-global text-center max-w-4xl mx-auto">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-org/10 text-green-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-org-dark leading-tight tracking-tight">
            {t.rich('introQuote', {
              green: (chunks) => <span className="text-green-org">{chunks}</span>
            })}
          </h2>
          <div className="mt-6 mx-auto w-16 h-1 bg-[#EFBC3D] rounded-full"></div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-global">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

            {/* Card 1: Producción Ecológica */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                {/* Decorative border circle */}
                <div className="absolute -inset-4 rounded-full border border-dashed border-[#EFBC3D]/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                {/* Main image circle */}
                <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg border-2 border-white group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/control-produccion-ecologica-organicbio.webp"
                    alt={t('proofs.eco.title')}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                {/* Floating Icon Badge */}
                <div className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-[#EFBC3D] text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
              </div>
              <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-gray-org-dark tracking-tight leading-tight">{t('proofs.eco.title')}</h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.5] text-slate-500 max-w-[280px] mb-8">
                {t('proofs.eco.desc')}
              </p>
              <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/10 pb-1.5 group-hover:border-[#EFBC3D] group-hover:text-[#d4a32d] transition-all duration-300">
                {t('proofs.eco.footer')}
              </div>
            </div>

            {/* Card 2: Control de Origen */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                <div className="absolute -inset-4 rounded-full border border-dashed border-[#EFBC3D]/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg border-2 border-white group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/control-organicbio.webp"
                    alt={t('proofs.control.title')}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-[#EFBC3D] text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17h4" />
                    <path d="M3 10V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
                    <path d="M14 7h3l4 4v7a2 2 0 0 1-2 2h-1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-gray-org-dark tracking-tight leading-tight">{t('proofs.control.title')}</h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.5] text-slate-500 max-w-[280px] mb-8">
                {t('proofs.control.desc')}
              </p>
              <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/10 pb-1.5 group-hover:border-[#EFBC3D] group-hover:text-[#d4a32d] transition-all duration-300">
                {t('proofs.control.footer')}
              </div>
            </div>

            {/* Card 3: Exportación Internacional */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                <div className="absolute -inset-4 rounded-full border border-dashed border-[#EFBC3D]/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                <div className="relative h-full w-full overflow-hidden rounded-full shadow-lg border-2 border-white group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/exportacion-organicbio.webp"
                    alt={t('proofs.export.title')}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-[#EFBC3D] text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-500 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                </div>
              </div>
              <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-gray-org-dark tracking-tight leading-tight">{t('proofs.export.title')}</h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.5] text-slate-500 max-w-[280px] mb-8">
                {t('proofs.export.desc')}
              </p>
              <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/10 pb-1.5 group-hover:border-[#EFBC3D] group-hover:text-[#d4a32d] transition-all duration-300">
                {t('proofs.export.footer')}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container-global pt-10 pb-20">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-transparent">
          <div className="max-w-3xl text-left">
            <span className="text-sm font-bold text-[#7a9d34] tracking-[0.1em] uppercase mb-2 block">{t('products.label')}</span>
            <h2 className="mb-4 text-[32px] md:text-[44px] font-bold text-[#7a9d34] tracking-tight">{t('products.title')}</h2>
            <p className="text-[17px] text-[#64748b] leading-relaxed max-w-[85%]">{t('products.subtitle')}</p>
          </div>
          <Link href="/productos" className="md:pb-2">
            <Button variant="primary" className="flex items-center gap-2 h-[48px] px-8 rounded-xl shadow-md hover:shadow-lg transition-all bg-[#7a9d34] hover:bg-[#688a2b] border-none">
              {t('products.catalogBtn')} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              id: "tomate-rama",
              image: "/tomate-rama-organicbio.webp",
              name: t('products.tomate.name'),
              desc: t('products.tomate.desc')
            },
            {
              id: "pimiento-california-rojo",
              image: "/variedad-pimientos-organicbio.webp",
              name: t('products.pimiento.name'),
              desc: t('products.pimiento.desc')
            },
            {
              id: "calabacin",
              image: "/calabacin-organicbio.webp",
              name: t('products.calabacin.name'),
              desc: t('products.calabacin.desc')
            }
          ].map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
              {/* Top Image */}
              <Link href={`/productos/${product.id}`} className="block relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </Link>

              {/* Card Content & Footer */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[28px] font-bold text-[#0f172a] mb-3 tracking-tight font-serif">
                    {product.name}
                  </h3>
                  <p className="text-[16px] text-[#64748b] leading-relaxed mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Button (Ficha Técnica) */}
                <Link href={`/productos/${product.id}`} className="mt-auto block">
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-2 h-[48px] rounded-xl text-[15px] font-bold border-2 border-[#7a9d34] text-[#7a9d34] hover:bg-[#7a9d34] hover:text-white transition-colors">
                    {t('products.fichaBtn')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Location */}
      <section className="bg-gray-50 py-24 px-4 border-t border-gray-100 mt-10">
        <div className="container-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Desktop Image Column (Hidden on mobile) */}
            <div className="hidden lg:block relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
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
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 lg:mb-12">
                {t('location.desc')}
              </p>

              {/* Mobile Image: Shown only on mobile between text and features */}
              <div className="lg:hidden relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src="/hero-image-organicbio.webp"
                  alt={t('location.subtitle')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="text-yellow-org">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold font-sans tracking-tight">{t('location.subtitle')}</h3>
                  </div>
                  <p className="text-gray-300 text-lg ml-[40px]">{t('location.caption')}</p>
                </div>
              </div>

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

      {/* CTA Commitment Block */}
      <section className="container-global mt-16 mb-10">
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
    </div>
  );
}

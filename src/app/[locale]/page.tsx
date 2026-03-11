"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero + Green Section Wrapper */}
      <div className="bg-[#739831]">
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
              <Link href="/contacto">
                <Button variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">{t('hero.contact')}</Button>
              </Link>
            </div>
          </div>

          {/* Bottom fade into green */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#739831] via-[#739831]/50 to-transparent z-10" />
        </section>

        {/* Unified Quote + Proofs Section */}
        <section className="bg-gradient-to-b from-[#739831] to-[#5a7a26] pt-16 md:pt-20 pb-16 md:pb-24">
          <div className="container-global">

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
            </div>

            {/* Main Quote */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight tracking-tight">
                {t.rich('introQuote', {
                  green: (chunks) => <span className="text-[#EFBC3D]">{chunks}</span>
                })}
              </h2>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 mx-auto w-16 h-1 bg-[#EFBC3D] rounded-full"></div>

            {/* Three Circles */}
            <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

              {/* Card 1: Producción Ecológica */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                  {/* Decorative border circle */}
                  <div className="absolute -inset-4 rounded-full border border-dashed border-white/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                  {/* Main image circle */}
                  <div className="relative h-full w-full overflow-hidden rounded-full shadow-xl border-3 border-white group-hover:shadow-2xl transition-all duration-500">
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
                <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-white tracking-tight leading-tight">{t('proofs.eco.title')}</h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.5] text-white/70 max-w-[280px] mb-8">
                  {t('proofs.eco.desc')}
                </p>
                <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/20 pb-1.5 group-hover:border-[#EFBC3D] transition-all duration-300">
                  {t('proofs.eco.footer')}
                </div>
              </div>

              {/* Card 2: Control de Origen */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                  <div className="absolute -inset-4 rounded-full border border-dashed border-white/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-full shadow-xl border-3 border-white group-hover:shadow-2xl transition-all duration-500">
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
                <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-white tracking-tight leading-tight">{t('proofs.control.title')}</h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.5] text-white/70 max-w-[280px] mb-8">
                  {t('proofs.control.desc')}
                </p>
                <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/20 pb-1.5 group-hover:border-[#EFBC3D] transition-all duration-300">
                  {t('proofs.control.footer')}
                </div>
              </div>

              {/* Card 3: Exportación Internacional */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative mb-10 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
                  <div className="absolute -inset-4 rounded-full border border-dashed border-white/20 group-hover:rotate-45 transition-transform duration-1000"></div>
                  <div className="relative h-full w-full overflow-hidden rounded-full shadow-xl border-3 border-white group-hover:shadow-2xl transition-all duration-500">
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
                <h3 className="mb-4 text-[22px] lg:text-[24px] font-bold text-white tracking-tight leading-tight">{t('proofs.export.title')}</h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.5] text-white/70 max-w-[280px] mb-8">
                  {t('proofs.export.desc')}
                </p>
                <div className="text-[11px] font-bold text-[#EFBC3D] uppercase tracking-[0.2em] border-b border-[#EFBC3D]/20 pb-1.5 group-hover:border-[#EFBC3D] transition-all duration-300">
                  {t('proofs.export.footer')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Product Categories */}
      <section className="bg-white pt-10 pb-20">
        <div className="container-global">
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
              id: "tomate-cherry",
              image: "/tomate-cherry-productos-organicbio.webp",
              name: t('products.tomate.name'),
              desc: t('products.tomate.desc')
            },
            {
              id: "pimiento-california-amarillo",
              image: "/pimiento-california-amarillo-organicbio.webp",
              name: t('products.pimiento.name'),
              desc: t('products.pimiento.desc')
            },
            {
              id: "calabacin",
              image: "/calabacin-productos-organicbio.png",
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
                  <h3 className="text-[28px] font-bold text-gray-600 mb-3 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-[16px] text-[#64748b] leading-relaxed mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Button (Ficha Técnica) */}
                <Link href={`/productos/${product.id}`} className="mt-auto block">
                  <Button variant="secondary" className="w-full h-[48px] rounded-xl text-[15px] font-bold shadow-md hover:shadow-lg transition-all">
                    {t('products.fichaBtn')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Origen de nuestra producción - Header Only */}
      <section className="bg-white pt-24 pb-12 overflow-hidden">
        <div className="container-global">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-bold text-[#7a9d34] tracking-[0.2em] uppercase mb-4 block animate-fade-in">
              Operativa Global
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6 tracking-tight">
              {t('location.title')}
            </h2>
            <p className="text-[#64748b] text-lg md:text-xl leading-relaxed">
              {t('location.subtitle')}
            </p>
          </div>

          {/* New Production Image with Interactive Markers */}
          <div className="relative max-w-5xl mx-auto mt-16 md:mt-24">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 group shadow-[#7a9d34]/5">
              <Image
                src="/mapa-origen-produccion-organicbio.webp"
                alt="Origen de nuestra producción"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

              {/* --- Interactive Area (Animated Markers) --- */}

              {/* Marker 1: Sede Almería */}
              <div
                onMouseEnter={() => setHoveredLoc('sede')}
                onMouseLeave={() => setHoveredLoc(null)}
                className={`absolute left-[67%] md:left-[69.1%] top-[29.9%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${hoveredLoc === 'sede' ? 'scale-150' : 'scale-100'}`}
              >
                {/* Expand Ring Animation */}
                <div className={`absolute h-12 w-12 rounded-full bg-yellow-400/30 animate-ping duration-1000 ${hoveredLoc === 'sede' ? 'block' : 'hidden'}`} />
                <div className={`absolute h-8 w-8 rounded-full bg-yellow-400/20 blur-md transition-opacity duration-300 ${hoveredLoc === 'sede' ? 'opacity-100' : 'opacity-0'}`} />
                {/* The Point Dot */}
                <div className={`h-3 w-3 rounded-full border border-white shadow-md transition-all duration-300 ${hoveredLoc === 'sede' ? 'bg-yellow-400 scale-110' : 'bg-yellow-400/50'}`} />
              </div>

              {/* Marker 2: Níjar (Finca) */}
              <div
                onMouseEnter={() => setHoveredLoc('nijar')}
                onMouseLeave={() => setHoveredLoc(null)}
                className={`absolute left-[73%] md:left-[70.7%] top-[29.9%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${hoveredLoc === 'nijar' ? 'scale-150' : 'scale-100'}`}
              >
                <div className={`absolute h-12 w-12 rounded-full bg-[#7a9d34]/30 animate-ping duration-1000 ${hoveredLoc === 'nijar' ? 'block' : 'hidden'}`} />
                <div className={`absolute h-8 w-8 rounded-full bg-[#7a9d34]/20 blur-md transition-opacity duration-300 ${hoveredLoc === 'nijar' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`h-3 w-3 rounded-full border border-white shadow-md transition-all duration-300 ${hoveredLoc === 'nijar' ? 'bg-[#7a9d34] scale-110' : 'bg-[#7a9d34]/50'}`} />
              </div>

              {/* Marker 3: Marruecos (Fincas) */}
              <div
                onMouseEnter={() => setHoveredLoc('marruecos')}
                onMouseLeave={() => setHoveredLoc(null)}
                className={`absolute left-[47.0%] top-[63.8%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-500 z-30 cursor-pointer ${hoveredLoc === 'marruecos' ? 'scale-150' : 'scale-100'}`}
              >
                <div className={`absolute h-16 w-16 rounded-full bg-[#7a9d34]/30 animate-ping duration-1000 ${hoveredLoc === 'marruecos' ? 'block' : 'hidden'}`} />
                <div className={`absolute h-10 w-10 rounded-full bg-[#7a9d34]/20 blur-md transition-opacity duration-300 ${hoveredLoc === 'marruecos' ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`h-4 w-4 rounded-full border border-white shadow-md transition-all duration-300 ${hoveredLoc === 'marruecos' ? 'bg-[#7a9d34] scale-110' : 'bg-[#7a9d34]/50'}`} />
              </div>

            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16 max-w-5xl mx-auto">
            <div
              onMouseEnter={() => setHoveredLoc('sede')}
              onMouseLeave={() => setHoveredLoc(null)}
              className={`bg-white rounded-[32px] p-8 border transition-all duration-300 flex flex-col items-center text-center group/card cursor-default ${hoveredLoc === 'sede' ? 'border-[#EFBC3D] shadow-xl translate-y-[-4px]' : 'border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]'}`}
            >
              <div className={`h-3 w-3 rounded-full bg-[#EFBC3D] mb-5 shadow-[0_0_15px_rgba(239,188,61,0.5)] ${hoveredLoc === 'sede' ? 'animate-pulse scale-125' : ''}`} />
              <h4 className={`text-[20px] font-bold mb-3 transition-colors duration-300 ${hoveredLoc === 'sede' ? 'text-[#d4a017]' : 'text-[#EFBC3D]'}`}>
                {t('location.sede.title')}
              </h4>
              <p className="text-[#64748b] leading-relaxed text-[15px]">
                {t('location.sede.desc')}
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredLoc('nijar')}
              onMouseLeave={() => setHoveredLoc(null)}
              className={`bg-white rounded-[32px] p-8 border transition-all duration-300 flex flex-col items-center text-center group/card cursor-default ${hoveredLoc === 'nijar' ? 'border-[#7a9d34] shadow-xl translate-y-[-4px]' : 'border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]'}`}
            >
              <div className={`h-3 w-3 rounded-full bg-[#7a9d34] mb-5 shadow-[0_0_15px_rgba(122,157,52,0.5)] ${hoveredLoc === 'nijar' ? 'animate-bounce scale-125' : ''}`} />
              <h4 className={`text-[20px] font-bold mb-3 transition-colors duration-300 ${hoveredLoc === 'nijar' ? 'text-[#5a7a26]' : 'text-[#7a9d34]'}`}>
                {t('location.nijar.title')}
              </h4>
              <p className="text-[#64748b] leading-relaxed text-[15px]">
                {t('location.nijar.desc')}
              </p>
            </div>

            <div
              onMouseEnter={() => setHoveredLoc('marruecos')}
              onMouseLeave={() => setHoveredLoc(null)}
              className={`bg-white rounded-[32px] p-8 border transition-all duration-300 flex flex-col items-center text-center group/card cursor-default ${hoveredLoc === 'marruecos' ? 'border-[#7a9d34] shadow-xl translate-y-[-4px]' : 'border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]'}`}
            >
              <div className={`h-3 w-3 rounded-full bg-[#7a9d34] mb-5 shadow-[0_0_15px_rgba(122,157,52,0.5)] ${hoveredLoc === 'marruecos' ? 'scale-125' : ''}`} />
              <h4 className={`text-[20px] font-bold mb-3 transition-colors duration-300 ${hoveredLoc === 'marruecos' ? 'text-[#5a7a26]' : 'text-[#7a9d34]'}`}>
                {t('location.marruecos.title')}
              </h4>
              <p className="text-[#64748b] leading-relaxed text-[15px]">
                {t('location.marruecos.desc')}
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* CTA Commitment Block */}
      <section className="bg-gradient-to-br from-[#f0f5e8] via-[#f5f8ef] to-[#eef3e4] py-16 md:py-20">
        <div className="container-global">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row relative">

            {/* Subtle Star Pattern Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06] z-0 hidden md:block"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 16v16M16 24h16' stroke='%23739831' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundSize: '64px 64px' }}
            />

            {/* Left Content */}
            <div className="w-full md:w-[45%] p-10 md:py-12 lg:py-14 md:px-12 lg:px-16 flex flex-col justify-center relative z-10">
              <h2 className="text-3xl font-bold text-green-org mb-5 leading-tight">
                {t.rich('commitment.title', {
                  br: () => <br />
                })}
              </h2>
              <p className="text-[#475569] text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-lg relative z-10">
                {t('commitment.desc')}
              </p>
              <div className="relative z-10">
                <Link href="/compromiso">
                  <Button className="bg-green-org text-white hover:bg-[#5a7a26] h-12 px-8 text-[15px] font-bold shadow-md transition-all rounded-full border-none">
                    {t('commitment.cta')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[55%] relative min-h-[300px] md:min-h-[auto] flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none z-10 md:w-full" />
              <Image
                src="/card-compromiso-organicbio.webp"
                alt={t('commitment.title')}
                fill
                className="object-cover object-right relative z-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

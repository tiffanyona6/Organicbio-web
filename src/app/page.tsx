import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[85vh] md:min-h-screen items-center justify-center bg-cover bg-center overflow-hidden px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.55)), url('/hero-image-organicbio.webp')"
        }}
      >
        <div className="container-global relative z-20 max-w-5xl text-center md:text-left">
          <h1 className="hero-title mb-6 text-white drop-shadow-2xl animate-fade-in-up">
            Saborea la <br />
            <span className="italic font-normal brightness-125 text-green-org">Naturaleza</span> <br />
            Más Pura.
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-gray-200 max-w-3xl font-light tracking-wide drop-shadow-md animate-fade-in-up animation-delay-200">
            Exportamos hortalizas ecológicas premium directamente de nuestros campos en Almería hasta tu mesa.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Link href="/productos">
              <Button className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all">Ver productos</Button>
            </Link>
            <Link href="/sobre-organic-bio">
              <Button variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20 transition-all">Conócenos</Button>
            </Link>
          </div>
        </div>

        {/* Subtle bottom fade to transition into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-org to-transparent z-10" />
      </section>

      {/* 3 Quick Proofs */}
      <section className="container-global">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-org/10 text-green-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-org-dark">100% Ecológico</h3>
            <p className="text-gray-500">Cultivo orgánico certificado respetando el medio ambiente.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-org/10 text-green-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-org-dark">Exportación B2B</h3>
            <p className="text-gray-500">Presencia en mercados internacionales y sector turístico.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-org/10 text-green-org">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-org-dark">Control de Calidad</h3>
            <p className="text-gray-500">Máximo estándar y trazabilidad en toda la producción.</p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container-global">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-org-dark md:text-4xl">Nuestros Productos Ecológicos</h2>
          <p className="mx-auto max-w-2xl text-gray-500">Producimos hortalizas de máxima calidad bajo estrictos estándares orgánicos.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Tomate", desc: "Variedades ecológicas de sabor intenso y alta conservación.", image: "/tomate-organicbio.webp" },
            { name: "Pimiento", desc: "Pimientos orgánicos cultivados con las mejores prácticas.", image: "/pimientos-organicbio.webp" },
            { name: "Calabacín", desc: "Producción continua de calabacines frescos y tiernos.", image: "/calabacín-organicbio.webp" }
          ].map((cat) => (
            <div key={cat.name} className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] w-full bg-gray-200 relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-org-dark">{cat.name}</h3>
                <p className="mb-6 text-gray-500">{cat.desc}</p>
                <Link href={`/productos#${cat.name.toLowerCase()}`}>
                  <Button variant="secondary" className="w-full">Ver detalle</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Calendar Placeholder */}
      <section className="bg-white py-16">
        <div className="container-global text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-org-dark">Calendario de Campaña</h2>
          <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-gray-500">
            [Gráfico visual del calendario anual por meses]
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container-global text-center">
        <h2 className="mb-8 text-2xl font-bold text-gray-org-dark">Nuestras Certificaciones</h2>
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
              Compromiso real con la<br />agricultura sostenible
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-lg relative z-10">
              Cultivamos nuestras hortalizas siguiendo prácticas agrícolas responsables que protegen el suelo, optimizan el uso del agua y reducen el impacto ambiental. Nuestro modelo combina tradición agrícola con innovación para garantizar productos ecológicos de alta calidad.
            </p>
            <div className="relative z-10">
              <Link href="/compromiso">
                <Button className="bg-white text-green-org hover:bg-gray-50 h-12 px-8 text-[15px] font-bold shadow-md transition-all rounded-full border-none">
                  Nuestro compromiso
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%] relative min-h-[300px] md:min-h-[auto] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-green-org via-green-org/70 to-transparent pointer-events-none z-10 md:w-full" />
            <Image
              src="/compromiso-organicbio.webp"
              alt="Compromiso con la agricultura ecol\u00f3gica"
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
                alt="Campos de Almería desde el aire"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-3 mb-1">
                  <div className="text-yellow-org">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold font-sans tracking-tight">Almería, España</h3>
                </div>
                <p className="text-gray-300 text-xl ml-[44px]">La Huerta de Europa</p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl lg:text-[46px] font-bold text-gray-900 mb-8 leading-tight">
                Ubicación <span className="relative whitespace-nowrap z-10 inline-block">Estratégica
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-org"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                Nuestras fincas se encuentran en el corazón de Almería, conocida como "La Huerta de Europa". El microclima único nos permite producir hortalizas ecológicas de alta calidad durante todo el año, asegurando un suministro constante para nuestros socios en todo el continente.
              </p>

              <div className="flex flex-col gap-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-yellow-org mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 8h-3V4H3v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM8 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-5h-3V9h2.5l2 3v1h-1.5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1.5">Logística Rápida</h4>
                    <p className="text-gray-500 text-lg">Entrega en 48 horas a los principales mercados europeos.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-yellow-org mt-1 flex-shrink-0">
                    {/* Award Icon Custom Fill */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1.5">Control de Calidad Premium</h4>
                    <p className="text-gray-500 text-lg">Rigurosos controles desde la cosecha hasta el envasado.</p>
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

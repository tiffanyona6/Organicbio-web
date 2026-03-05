export default function SobreOrganicBio() {
    return (
        <div className="py-12 lg:py-20">
            {/* Intro Section */}
            <section className="container-global mb-20 text-center">
                <h1 className="mb-6 text-4xl font-extrabold text-gray-org-dark md:text-5xl">Sobre OrganicBio</h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                    Organic-Bio Agriculture SL es una empresa dedicada en cuerpo y alma a la producción y comercialización
                    de hortalizas ecológicas. Operamos desde Almería, la huerta de Europa, llevando nuestros productos saludables a
                    los mercados internacionales más exigentes.
                </p>
            </section>

            {/* Two Column details */}
            <section className="container-global mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="aspect-[4/3] rounded-3xl bg-gray-100 flex items-center justify-center overflow-hidden relative">
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-green-org/5"></div>
                        <span className="text-gray-400 font-bold text-xl relative z-10">Imagen Instalaciones / Campo</span>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-org-dark mb-4">Nuestra Historia y Misión</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Nacimos con una visión clara: cultivar el futuro. Hemos crecido creyendo firmemente que la agricultura
                                orgánica es el único camino sostenible para proporcionar alimentos saludables sin comprometer los recursos de las próximas generaciones.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nuestra misión es suministrar a empresas y distribuidores hortofrutícolas de primer nivel
                                productos ecológicos reales, trazables, y de la máxima frescura.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                            <div>
                                <h4 className="font-bold text-gray-org-dark mb-1 text-2xl">100%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Producción Propia</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-org-dark mb-1 text-2xl">+15</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Países Exportados</p>
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
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-6">Infraestructura</h3>
                            <p className="text-gray-600 mb-6">
                                Controlamos el proceso completo. Desde nuestras fincas propias en Almería, donde la luz del sol
                                hace magia durante todo el año, hasta nuestras instalaciones de manipulado.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> Fincas con tecnología de riego inteligente.</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> Almacén climatizado para romper la cadena de calor.</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> Líneas de confección certificadas para orgánico.</li>
                                <li className="flex gap-3 items-start"><span className="text-green-org">✓</span> Alianzas logísticas de transporte rápido internacional.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-6">Nuestros Mercados</h3>
                            <p className="text-gray-600 mb-6">
                                Nuestro principal volumen de negocio es la exportación B2B, enviando el sabor y la salud de
                                la agricultura ecológica española a toda Europa.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                {['Alemania', 'Reino Unido', 'Francia', 'Holanda', 'Suiza', 'Países Nórdicos'].map(country => (
                                    <span key={country} className="px-4 py-2 rounded-full bg-green-org/10 text-green-org font-medium text-sm">
                                        {country}
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

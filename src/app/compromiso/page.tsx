export default function Compromiso() {
    return (
        <div className="py-12 lg:py-20">
            {/* Hero */}
            <section className="container-global mb-20 text-center">
                <h1 className="mb-6 text-4xl font-extrabold text-gray-org-dark md:text-5xl">Nuestro Compromiso</h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-500">
                    La calidad superior y la sostenibilidad son los pilares sobre los que se asienta toda la producción de Organic Bio.
                    Garantizamos la seguridad alimentaria en cada paso de la cadena.
                </p>
            </section>

            {/* Quality and Certifications */}
            <section className="bg-white py-16 mb-20">
                <div className="container-global">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-org-dark mb-4">Calidad y Trazabilidad</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Contamos con un sistema integrado de control de calidad desde la siembra hasta la expedición.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-org text-white font-bold">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-org-dark mb-2">Control en Finca</h3>
                                    <p className="text-gray-500">Monitoreo constante del crecimiento, optimización de recursos y uso estricto de control biológico.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-org text-white font-bold">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-org-dark mb-2">Selección y Envasado</h3>
                                    <p className="text-gray-500">Proceso automatizado y supervisión manual para asegurar el calibre, color y frescura óptima del producto.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-org text-white font-bold">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-org-dark mb-2">Trazabilidad Total</h3>
                                    <p className="text-gray-500">Sistema informatizado que permite conocer el origen exacto (finca, lote, fecha) de cada caja enviada.</p>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[4/3] rounded-3xl bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner">
                            <span className="text-gray-400">Imagen Proceso Calidad</span>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-gray-50 p-8 lg:p-12 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-org-dark mb-8 text-center">Certificaciones Acreditadas</h3>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                            {/* Placeholders for logos */}
                            <div className="h-20 w-32 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">Euro Hoja</div>
                            <div className="h-20 w-32 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">CAAE</div>
                            <div className="h-20 w-32 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">GlobalGAP</div>
                            <div className="h-20 w-32 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">GRASP</div>
                            <div className="h-20 w-32 bg-white rounded border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">IFS/BRC (Opt.)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="container-global">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-org-dark mb-4">Sostenibilidad Real</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        El cultivo orgánico no es solo una etiqueta; es una filosofía de trabajo que busca minimizar la huella medioambiental.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-org/20 hover:border-green-org transition-colors">
                        <div className="text-4xl mb-4">💧</div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-3">Gestión Eficiente del Agua</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sistemas de riego por goteo de alta precisión gestionados por sensores de humedad, optimizando cada gota en el entorno árido de Almería.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-org/20 hover:border-green-org transition-colors">
                        <div className="text-4xl mb-4">🌱</div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-3">Conservación del Suelo</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Rotación de cultivos y abono orgánico para mantener la fertilidad natural de la tierra y evitar la degradación.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-org/20 hover:border-green-org transition-colors">
                        <div className="text-4xl mb-4">🐞</div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-3">Biodiversidad</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Uso exclusivo de fauna auxiliar (control biológico) para combatir plagas, fomentando un equilibrio ecológico natural en los invernaderos.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-org/20 hover:border-green-org transition-colors">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-3">Reducción Enérgetica</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Aprovechamiento de la energía solar pasiva (el "Milagro de Almería") sin uso de calefacción fósil en los invernaderos.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-org/20 hover:border-green-org transition-colors">
                        <div className="text-4xl mb-4">♻️</div>
                        <h3 className="text-xl font-bold text-gray-org-dark mb-3">Gestión de Residuos</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Reciclaje de restos vegetales para compostaje e integración de envases más sostenibles y biodegradables.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

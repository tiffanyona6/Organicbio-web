import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Dummy detail product component based on the briefing.
// In a real app, this data would come from a CMS or DB based on id.
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const productName = resolvedParams.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="py-8 pb-20">
            <div className="container-global">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-green-org">Inicio</Link>
                    <span>/</span>
                    <Link href="/productos" className="hover:text-green-org">Productos</Link>
                    <span>/</span>
                    <span className="text-gray-org-dark font-medium">{productName}</span>
                </nav>

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mb-20">
                    {/* Left: Image block */}
                    <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl bg-gray-100 overflow-hidden shadow-sm border border-gray-100">
                        <div className="absolute top-6 left-6 z-10 rounded-full bg-green-org px-4 py-1.5 text-sm font-bold text-white shadow-sm">
                            Bio Certificado
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                            Imagen {productName} Grande
                        </div>
                    </div>

                    {/* Right: Info block */}
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold text-gray-org-dark md:text-5xl">{productName}</h1>

                        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-org" /> Certificado Ecológico</span>
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-org" /> Origen: Almería, España</span>
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gray-400" /> Ref: ORG-{resolvedParams.id.substring(0, 3).toUpperCase()}</span>
                        </div>

                        <p className="mb-8 text-lg text-gray-600 leading-relaxed border-l-4 border-green-org pl-4">
                            Cultivado bajo estrictos estándares ecológicos en nuestras fincas de Almería. Especialmente seleccionado
                            para exportación B2B y mercados internacionales exigentes con la salud y el medio ambiente.
                        </p>

                        {/* Campaign Visual Calendar (Placeholder) */}
                        <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                            <h3 className="mb-4 font-bold text-gray-org-dark">Disponibilidad Estacional</h3>
                            <div className="grid grid-cols-6 gap-2 sm:grid-cols-12 text-center text-xs">
                                {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((m) => (
                                    <div key={m} className={`rounded p-2 font-medium ${['Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May'].includes(m) ? 'bg-green-org text-white' : 'bg-gray-200 text-gray-400'}`}>
                                        {m}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button className="w-full sm:w-auto h-14 px-8 text-lg">Solicitar Presupuesto</Button>
                        </div>
                    </div>
                </div>

                {/* Tabs Section Placeholder */}
                <div className="mb-20">
                    {/* Tab Headers */}
                    <div className="flex overflow-x-auto border-b-2 border-gray-100 mb-8 pb-1 scrollbar-hide">
                        <button className="whitespace-nowrap border-b-2 border-green-org px-6 py-4 text-lg font-bold text-green-org z-10 -mb-[3px]">Product Info</button>
                        <button className="whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-500 hover:text-gray-org-dark">Technical specs</button>
                        <button className="whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-500 hover:text-gray-org-dark">Logistics & packaging</button>
                    </div>

                    {/* Tab Content (Product Info selected by default) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-4">Información del Cultivo</h3>
                            <p>
                                Nuestro {productName.toLowerCase()} se cultiva en invernaderos solares en la provincia de Almería,
                                aprovechando al máximo la luz natural y utilizando técnicas de control biológico de plagas. No utilizamos
                                pesticidas sintéticos ni fertilizantes químicos, asegurando un producto 100% natural, respetuoso
                                con la biodiversidad y seguro para el consumidor.
                            </p>
                            <p>
                                Cada lote se inspecciona rigurosamente para asegurar que cumpla con los estándares europeos y
                                norteamericanos de calidad para alimentos orgánicos.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-org-dark mb-6">Certificaciones del Producto</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo Euro Hoja</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo CAAE</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo GlobalGAP</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo GRASP</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Placeholder */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-org-dark mb-8">Productos Relacionados</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-xl border border-gray-100 p-4 transition-shadow hover:shadow-md">
                            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">Foto Relacionado</div>
                            <h3 className="font-bold text-gray-org-dark mb-1">Otro Producto 1</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-1">Descripción breve del producto.</p>
                            <Link href="/productos" className="text-sm font-bold text-green-org hover:underline">Ver producto →</Link>
                        </div>
                        {/* ... more items could go here ... */}
                    </div>
                </div>

            </div>
        </div>
    );
}

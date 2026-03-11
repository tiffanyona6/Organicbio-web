import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";
import { PRODUCTS } from "@/lib/products";
import RelatedProducts from "@/components/products/RelatedProducts";

export default async function ProductDetail({ params }: { params: Promise<{ id: string, locale: string }> }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const t = await getTranslations('ProductDetail');
    const tProd = await getTranslations('Productos');

    // Find current product in our shared data
    const currentProductItem = PRODUCTS.find(p => p.id === id);
    const productImage = currentProductItem?.image || "/tomate-organicbio.webp";

    // Prepare translations for RelatedProducts component
    const names: Record<string, string> = {};
    const descs: Record<string, string> = {};
    PRODUCTS.forEach(p => {
        names[p.id] = tProd(`items.${p.id}.name`);
        descs[p.id] = tProd(`items.${p.id}.desc`);
    });

    const relatedTranslations = {
        title: t('related.title'),
        cta: t('related.cta'),
        names,
        descs
    };

    const productName = tProd(`items.${id}.name`);

    return (
        <div className="py-8 pb-20">
            <div className="container-global">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-green-org">{t('breadcrumb.home')}</Link>
                    <span>/</span>
                    <Link href="/productos" className="hover:text-green-org">{t('breadcrumb.products')}</Link>
                    <span>/</span>
                    <span className="text-gray-org-dark font-medium">{productName}</span>
                </nav>

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mb-20">
                    {/* Left: Image block */}
                    <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl bg-gray-100 overflow-hidden shadow-sm border border-gray-100">
                        <div className="absolute top-6 left-6 z-10 rounded-full bg-green-org px-4 py-1.5 text-sm font-bold text-white shadow-sm">
                            {t('tag')}
                        </div>
                        <Image
                            src={productImage}
                            alt={productName}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right: Info block */}
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold text-gray-org-dark md:text-5xl">{productName}</h1>

                        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-org" /> {t('labels.eco')}</span>
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-org" /> {t('labels.origin')}</span>
                            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gray-400" /> {t('labels.ref')} {currentProductItem?.ref || `ORG-${id.substring(0, 3).toUpperCase()}`}</span>
                        </div>

                        <p className="mb-8 text-lg text-gray-600 leading-relaxed border-l-4 border-green-org pl-4">
                            {tProd(`items.${id}.desc`)}
                        </p>

                        {/* Campaign Visual Calendar */}
                        <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                            <h3 className="mb-4 font-bold text-gray-org-dark">{t('calendar.title')}</h3>
                            <div className="grid grid-cols-6 gap-2 sm:grid-cols-12 text-center text-xs">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, index) => {
                                    const monthLabel = t(`calendar.months.${index}`);
                                    const isActive = [8, 9, 10, 11, 0, 1, 2, 3, 4].includes(index); // Sep - May
                                    return (
                                        <div key={index} className={`rounded p-2 font-medium ${isActive ? 'bg-green-org text-white' : 'bg-gray-200 text-gray-400'}`}>
                                            {monthLabel}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link href="/contacto" className="w-full sm:w-auto mt-auto block">
                                <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg">{t('cta')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tabs Section Placeholder */}
                <div className="mb-20">
                    {/* Tab Headers */}
                    <div className="flex overflow-x-auto border-b-2 border-gray-100 mb-8 pb-1 scrollbar-hide">
                        <button className="whitespace-nowrap border-b-2 border-green-org px-6 py-4 text-lg font-bold text-green-org z-10 -mb-[3px]">{t('tabs.info')}</button>
                        <button className="whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-500 hover:text-gray-org-dark">{t('tabs.specs')}</button>
                        <button className="whitespace-nowrap px-6 py-4 text-lg font-medium text-gray-500 hover:text-gray-org-dark">{t('tabs.logistics')}</button>
                    </div>

                    {/* Tab Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-gray-org-dark mb-4">{t('tabs.crop.title')}</h3>
                            <p>{t('tabs.crop.p1')}</p>
                            <p>{t('tabs.crop.p2')}</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-org-dark mb-6">{t('tabs.certs')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo Euro Hoja</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo CAAE</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo GlobalGAP</div>
                                <div className="h-16 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-400">Logo GRASP</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <RelatedProducts 
                    currentId={id} 
                    allProducts={PRODUCTS} 
                    translations={relatedTranslations} 
                />

            </div>
        </div>
    );
}

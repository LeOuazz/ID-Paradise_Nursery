'use client';

import ProductList from '@/components/ProductList';
import Header from '@/components/Header';
import Image from 'next/image';

const ProductPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1524592579738-65f152d0bdbb?auto=format&fit=crop&w=1950&q=80"
                        alt="Lush plant banner"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-extrabold drop-shadow">
                            🪴 Shop Houseplants
                        </h1>
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((id) => (
                        <div key={id} className="relative h-48 rounded-lg overflow-hidden shadow">
                            <Image
                                src={`https://source.unsplash.com/featured/?plant,green,indoor,houseplant&sig=${id}`}
                                alt={`Unsplash plant ${id}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </section>

                <ProductList />
            </main>
        </>
    );
};

export default ProductPage;

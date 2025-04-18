// src/app/products/page.tsx
'use client';

import ProductList from '@/components/ProductList';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-64 mb-8 rounded-lg overflow-hidden"
                >
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1669864070333-f273edc8f118?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Lush plant banner"
                        fill
                        className="object-cover object-center"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                        <h1 className="text-green-400 text-4xl font-extrabold drop-shadow">
                            🪴 Shop Houseplants
                        </h1>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center gap-4 mb-8"
                >
                    <Link href="/">
                        <button className="px-4 py-2 bg-gray-900 text-green-400 border border-gray-700 rounded hover:bg-gray-800 hover:text-green-500 transition">
                            Back to Home
                        </button>
                    </Link>
                    <Link href="/cart">
                        <button className="px-4 py-2 bg-gray-900 text-green-400 border border-gray-700 rounded hover:bg-gray-800 hover:text-green-500 transition">
                            View Cart
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <ProductList/>
                </motion.div>
            </main>
        </>
    );
};

export default ProductPage;

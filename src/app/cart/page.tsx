// src/app/cart/page.tsx
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { removeItem } from '@/store/CartSlice';
import CartItem from '@/components/CartItem';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const totalAmount = cart.reduce((total, item) => total + item.quantity * item.cost, 0);

    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    const handleClearCart = () => {
        cart.forEach((item) => dispatch(removeItem(item.name)));
    };

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-green-700 mb-6 text-center"
            >
                🛒 Your Cart
            </motion.h1>

            {cart.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-gray-600"
                >
                    <p>Your cart is feeling a little lonely 🌱</p>
                    <p className="italic mt-2">“To plant a garden is to believe in tomorrow.” – Audrey Hepburn</p>
                    <Link href="/products">
                        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                            Shop Plants
                        </button>
                    </Link>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                >
                    <div className="flex flex-col gap-6">
                        {cart.map((item) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CartItem
                                    name={item.name}
                                    image={item.image}
                                    cost={item.cost}
                                    quantity={item.quantity}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 border-t pt-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-xl font-semibold text-green-800">
                                Total: ${totalAmount.toFixed(2)}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/products">
                                    <button className="px-4 py-2 bg-gray-900 text-green-500 border border-gray-700 rounded hover:bg-gray-800 hover:text-green-400 transition">
                                        Continue Shopping
                                    </button>
                                </Link>
                                <button
                                    onClick={handleClearCart}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Clear Cart
                                </button>
                                <button
                                    onClick={handleCheckoutShopping}
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-center text-gray-500 italic">
                            “The love of gardening is a seed once sown that never dies.” — Gertrude Jekyll
                        </p>
                    </div>
                </motion.div>
            )}
        </main>
    );
};

export default CartPage;

// src/components/Header.tsx
// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Header: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cart);
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-gray-900 sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-green-400">
                Paradise Nursery 🌿
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-green-300">
                <Link href="/products" className="hover:text-green-400 transition">Products</Link>
                <Link href="/cart" className="relative hover:text-green-400 transition">
                    <ShoppingCart className="w-6 h-6" />
                    {totalCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
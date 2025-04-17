// src/app/cart/page.tsx
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { removeItem, updateQuantity } from '@/store/CartSlice';
import CartItem from '@/components/CartItem';
import Link from 'next/link';

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
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>Your cart is currently empty.</p>
                    <Link href="/products" className="text-green-600 underline mt-2 inline-block">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-6">
                        {cart.map((item) => (
                            <CartItem
                                key={item.name}
                                name={item.name}
                                image={item.image}
                                cost={item.cost}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>

                    <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xl font-semibold">Total Cart Amount: ${totalAmount.toFixed(2)}</p>
                        <div className="flex gap-4">
                            <Link href="/products">
                                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
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
                </>
            )}
        </main>
    );
};

export default CartPage;

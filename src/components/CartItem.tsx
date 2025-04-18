// src/components/CartItem.tsx
'use client';

import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '@/store/CartSlice';
import { AppDispatch } from '@/store/store';
import Image from 'next/image';

interface CartItemProps {
    name: string;
    image: string;
    cost: number;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, cost, quantity }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleRemove = () => {
        dispatch(removeItem(name));
    };

    const handleIncrement = () => {
        dispatch(updateQuantity({ name, quantity: quantity + 1 }));
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            dispatch(updateQuantity({ name, quantity: quantity - 1 }));
        } else {
            dispatch(removeItem(name));
        }
    };

    const calculateSubtotal = () => {
        return cost * quantity;
    };

    return (
        <div className="flex gap-4 items-center border-b py-4">
            <Image
                src={image}
                alt={name}
                width={100}
                height={100}
                className="rounded-md object-cover"
            />
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-700">{name}</h3>
                <p className="text-gray-600">${cost.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={handleDecrement}
                        className="px-3 py-1 bg-gray-900 text-red-400 rounded hover:bg-gray-800 hover:text-red-500"
                    >
                        -
                    </button>
                    <span className="px-2 font-medium text-green-700">{quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="px-3 py-1 bg-gray-900 text-green-400 rounded hover:bg-gray-800 hover:text-green-500"
                    >
                        +
                    </button>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                    Total: ${calculateSubtotal().toFixed(2)}
                </p>
                <button
                    onClick={handleRemove}
                    className="mt-2 text-sm text-red-600 hover:underline"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;

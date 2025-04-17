// app/components/ProductList.tsx
'use client';
import { addItem } from '@/store/CartSlice';
import { AppDispatch } from '@/store/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Image from 'next/image';

// Define a type for plant items
type Plant = {
    name: string;
    image: string;
    description: string;
    cost: number;
    categories: string[];
};

// Sample array of plants
const plantsArray: Plant[] = [
    {
        name: 'Snake Plant',
        image: 'https://unsplash.com/fr/photos/une-plante-en-pot-posee-sur-une-table-blanche-wdArsFqaZ5w',
        description: 'A hardy plant that thrives on neglect.',
        cost: 15,
        categories: ['Low Light', 'Air Purifying'],
    },
    {
        name: 'Monstera',
        image: 'https://source.unsplash.com/featured/?monstera-plant&sig=2',
        description: 'Big, beautiful leaves that split as they grow.',
        cost: 25,
        categories: ['Tropical', 'Pet Friendly'],
    },
    {
        name: 'ZZ Plant',
        image: 'https://source.unsplash.com/featured/?zz-plant&sig=3',
        description: 'Low maintenance with glossy leaves.',
        cost: 20,
        categories: ['Low Light'],
    },
    {
        name: 'Peace Lily',
        image: 'https://source.unsplash.com/featured/?peace-lily&sig=4',
        description: 'Elegant white blooms and air-purifying.',
        cost: 18,
        categories: ['Flowering', 'Air Purifying'],
    },
    {
        name: 'Pothos',
        image: 'https://source.unsplash.com/featured/?pothos-plant&sig=5',
        description: 'Easy to grow with trailing vines.',
        cost: 12,
        categories: ['Beginner Friendly'],
    },
    {
        name: 'Spider Plant',
        image: 'https://source.unsplash.com/featured/?spider-plant&sig=6',
        description: 'Striking green and white leaves.',
        cost: 14,
        categories: ['Pet Friendly', 'Air Purifying'],
    },
];

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});

    const handleAddToCart = (plant: Plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true,
        }));
    };

    return (
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {plantsArray.map((plant, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between"
                >
                    <Image
                        src={plant.image}
                        alt={plant.name}
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg"
                    />
                    <h2 className="text-lg font-semibold mt-2">{plant.name}</h2>
                    <p className="text-sm text-gray-600 text-center">{plant.description}</p>
                    <p className="font-bold text-green-700">${plant.cost}</p>
                    <button
                        onClick={() => handleAddToCart(plant)}
                        className={`mt-3 px-4 py-2 rounded text-white font-medium ${
                            addedToCart[plant.name]
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700'
                        }`}
                        disabled={!!addedToCart[plant.name]}
                    >
                        {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

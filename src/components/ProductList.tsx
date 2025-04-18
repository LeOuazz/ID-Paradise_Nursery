// src/components/ProductList.tsx
'use client';
import { addItem } from '@/store/CartSlice';
import { AppDispatch, RootState } from '@/store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        image: 'https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A hardy plant that thrives on neglect.',
        cost: 15,
        categories: ['Low Light', 'Air Purifying'],
    },
    {
        name: 'Monstera',
        image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Big, beautiful leaves that split as they grow.',
        cost: 25,
        categories: ['Tropical', 'Pet Friendly'],
    },
    {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1606256419855-d72ce8675863?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Low maintenance with glossy leaves.',
        cost: 20,
        categories: ['Low Light'],
    },
    {
        name: 'Peace Lily',
        image: 'https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Elegant white blooms and air-purifying.',
        cost: 18,
        categories: ['Flowering', 'Air Purifying'],
    },
    {
        name: 'Pothos',
        image: 'https://images.unsplash.com/photo-1599224473702-3e955ef70efe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvdGhvc3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Easy to grow with trailing vines.',
        cost: 12,
        categories: ['Beginner Friendly'],
    },
    {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Striking green and white leaves.',
        cost: 14,
        categories: ['Pet Friendly', 'Air Purifying'],
    },
];

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});
    const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

    const handleAddToCart = (plant: Plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true,
        }));
    };

    const getQuantity = (name: string) => {
        const item = cart.find(item => item.name === name);
        return item?.quantity || 0;
    };

    return (
        <>
            <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
                {plantsArray.map((plant, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                        onClick={() => setSelectedPlant(plant)}
                    >
                        <Image
                            src={plant.image}
                            alt={plant.name}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-green-800 mb-1">{plant.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">{plant.description}</p>
                                <p className="text-base font-semibold text-green-700 mb-2">${plant.cost}</p>
                                <p className="text-xs text-gray-500 mb-2">In Cart: {getQuantity(plant.name)}</p>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart(plant);
                                }}
                                className={`mt-3 px-4 py-2 rounded-lg text-white text-sm font-medium w-full ${
                                    addedToCart[plant.name]
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 transition'
                                }`}
                                disabled={addedToCart[plant.name]}
                            >
                                {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlant && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-2xl">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                            onClick={() => setSelectedPlant(null)}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedPlant.image}
                            alt={selectedPlant.name}
                            width={600}
                            height={400}
                            className="w-full h-60 object-cover rounded-md"
                        />
                        <h2 className="text-2xl font-bold text-green-800 mt-4">{selectedPlant.name}</h2>
                        <p className="text-gray-600 mt-2">{selectedPlant.description}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            Categories: {selectedPlant.categories.join(', ')}
                        </p>
                        <p className="text-lg font-semibold text-green-700 mt-4">${selectedPlant.cost}</p>
                        <button
                            onClick={() => {
                                handleAddToCart(selectedPlant);
                                setSelectedPlant(null);
                            }}
                            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductList;
// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
      <main className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
            src="https://images.unsplash.com/photo-1686544636587-d0c43a8f609a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual background
            alt="Green paradise background"
            fill
            priority
            className="object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow">
            Paradise Nursery 🌿
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-6">
            Discover your own indoor jungle. Beautiful, low-maintenance houseplants delivered to your door.
          </p>
          <Link href="/products">
            <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </main>
  );
};

export default LandingPage;
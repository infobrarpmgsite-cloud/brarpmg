'use client';

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0  backdrop-blur-md bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center">
        {/* Spinning loader */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B5FE3] mb-4"></div>
        
        {/* Loading text */}
        <p className="text-gray-700 font-medium" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;

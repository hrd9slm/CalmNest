'use client'
import React, { useRef } from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: 'Technology', image: 'https://placehold.co/100x100' },
  { id: 2, name: 'Health', image: 'https://placehold.co/100x100' },
  { id: 3, name: 'Finance', image: 'https://placehold.co/100x100' },
  { id: 4, name: 'Education', image: 'https://placehold.co/100x100' },
  { id: 5, name: 'Travel', image: 'https://placehold.co/100x100' },
  { id: 6, name: 'Adventure', image: 'https://placehold.co/100x100' },
  { id: 7, name: 'Lifestyle', image: 'https://placehold.co/100x100' },

];

const Categories: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // The multiplier can be adjusted for faster/slower scrolling
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div
        ref={containerRef}
        className="flex space-x-5 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ overflow: 'hidden' }}
      >
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
            </div>
            <span className="mt-2 text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
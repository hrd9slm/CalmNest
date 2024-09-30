import React, { useState, useEffect, FormEvent } from 'react';
import { fetchFormData } from '../../utils/fetchFormData'; 

interface Category {
  id?: number;
  title: string;
  imageUrl?: string;
  userId?: number;
}

interface CategoryFormProps {
  category?: Category | null; // Allow null or undefined
  onSuccess: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, onSuccess }) => {
  const [title, setTitle] = useState(category?.title || '');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      setTitle(category.title);
    }
  }, [category]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    if (image) formData.append('image', image);

    try {
      if (category?.id) {
        // Update category
        await fetchFormData(`/categories/${category.id}`, {
          method: 'PUT',
          body: formData,
        });
      } else {
        // Create new category
        await fetchFormData('/categories', {
          method: 'POST',
          body: formData,
        });
      }
      onSuccess();
    } catch (err) {
      setError('An error occurred while saving the category.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{category ? 'Edit Category' : 'Add New Category'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              const files = (e.target as HTMLInputElement).files;
              if (files && files.length > 0) {
                setImage(files[0]);
              }
            }}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {category ? 'Update' : 'Create'} Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
import React, { useState, useEffect } from 'react';
import { fetchInstance } from '../../utils/fetchInstance';
import CategoryForm from './CategoryForm';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Category {
  id: number;
  title: string;
  imageUrl?: string;
  userId?: number;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCategories = async () => {
    try {
      const data = await fetchInstance('/categories');
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await fetchInstance(`/categories/${id}`, { method: 'DELETE' });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleModalSave = async () => {
    handleModalClose();
    fetchCategories();
  };

  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Title</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Image</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {categories.map((category) => (
            <tr key={category.id} className="hover:bg-gray-50">
              <td className="p-4 text-[15px] text-gray-800">{category.title}</td>
              <td className="p-4 text-[15px] text-gray-800">
                {category.imageUrl && <img src={category.imageUrl} alt={category.title} className="w-16 h-16 object-cover" />}
              </td>
              <td className="p-4">
                <button onClick={() => handleEdit(category)} className="mr-4" title="Edit">
                  <FaEdit className="w-5 fill-blue-500 hover:fill-blue-700" />
                </button>
                <button onClick={() => handleDelete(category.id)} className="mr-4" title="Delete">
                  <FaTrash className="w-5 fill-red-500 hover:fill-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Edit Category</h3>
            <CategoryForm
              category={selectedCategory}
              onSuccess={() => {
                handleModalClose();
                fetchCategories();
              }}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
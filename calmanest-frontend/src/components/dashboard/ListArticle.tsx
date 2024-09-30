"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fetchFormData } from '../../utils/fetchFormData';

interface Article {
  id: number;
  title: string;
  content: string;
  image: string; 
}

const ListArticle: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Fetch articles from the API
    const fetchArticles = async () => {
      try {
        const response = await fetchFormData('/articles', { method: 'GET' });
        setArticles(response);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleEdit = (article: Article) => {
    setCurrentArticle(article);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await fetchFormData(`/article/${id}`, { method: 'DELETE' });
      setArticles(articles.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentArticle(null);
  };

  const handleModalSave = async () => {
    if (currentArticle) {
      const formData = new FormData();
      formData.append("title", currentArticle.title);
      formData.append("content", currentArticle.content);
      if (currentArticle.image) {
        formData.append("image", currentArticle.image);
      }

      try {
        const response = await fetchFormData(`/article/${currentArticle.id}`, {
          method: 'PUT',
          body: formData,
        });

        setArticles(
          articles.map((article) =>
            article.id === currentArticle.id ? response : article
          )
        );
      } catch (error) {
        console.error("Error updating article:", error);
      }
    }
    handleModalClose();
  };

  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Title</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Content</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Image</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {articles.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50">
              <td className="p-4 text-[15px] text-gray-800">{article.title}</td>
              <td className="p-4 text-[15px] text-gray-800">{article.content}</td>
              <td className="p-4 text-[15px] text-gray-800">
                {article.image && (
                  <img src={article.image} alt={article.title} className="w-16 h-16 object-cover" />
                )}
              </td>
              <td className="p-4">
                <button onClick={() => handleEdit(article)} className="mr-4" title="Edit">
                  <FaEdit className="w-5 fill-blue-500 hover:fill-blue-700" />
                </button>
                <button onClick={() => handleDelete(article.id)} className="mr-4" title="Delete">
                  <FaTrash className="w-5 fill-red-500 hover:fill-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && currentArticle && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Edit Article</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={currentArticle.title}
                onChange={(e) =>
                  setCurrentArticle({ ...currentArticle, title: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                value={currentArticle.content}
                onChange={(e) =>
                  setCurrentArticle({ ...currentArticle, content: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <input
                type="file"
                onChange={(e) => {
                  const files = (e.target as HTMLInputElement).files;
                  if (files && files.length > 0) {
                    setCurrentArticle({ ...currentArticle, image: URL.createObjectURL(files[0]) });
                  }
                }}
                className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="flex justify-end">
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

export default ListArticle;
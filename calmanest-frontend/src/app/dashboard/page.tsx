"use client";
import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import ListArticle from "@/components/dashboard/ListArticle";
import AddArticle from "@/components/dashboard/AddArticle";
import ProfileForm from "@/components/dashboard/ProfileForm";
import ProfileInfo from "@/components/dashboard/ProfileInfo";
import MeditationAndProgramForm from "@/components/dashboard/MeditationAndProgramForm";
import CategoryList from "@/components/dashboard/CategoryList"; // Import the CategoryList component
import CategoryForm from "@/components/dashboard/CategoryForm"; // Import the CategoryForm component

const Page = () => {
  const [isAddArticleModalOpen, setIsAddArticleModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleAddArticleModalOpen = () => {
    setIsAddArticleModalOpen(true);
  };

  const handleAddArticleModalClose = () => {
    setIsAddArticleModalOpen(false);
  };

  const handleAddCategoryModalOpen = () => {
    setIsAddCategoryModalOpen(true); 
  };

  const handleAddCategoryModalClose = () => {
    setIsAddCategoryModalOpen(false); 
  };

  const handleSectionClick = (section: string) => (e: MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
  };


  return (
    <div className="flex">
      <nav className="bg-white shadow-lg h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] overflow-auto">
        <Link href="/">
          <img src="/images/CalmNest2.png" alt="logo" className="w-36" />
        </Link>

        <ul className="mt-6"></ul>
        <div className="mt-6">
          <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
          <ul className="mt-3">
            <li>
              <Link
                href="/posts"
                onClick={handleSectionClick("posts")}
                className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                    data-original="#000000"
                  />
                  <path
                    d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                    data-original="#000000"
                  />
                  <path
                    d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                    data-original="#000000"
                  />
                </svg>
                <span>Posts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/meditations"
                onClick={handleSectionClick("meditations")}
                className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                    data-original="#000000"
                  />
                  <path
                    d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
                    data-original="#000000"
                  />
                  <path
                    d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
                    data-original="#000000"
                  />
                </svg>
                <span>Meditations</span>
              </Link>
            </li>
            <li>
              <Link
                href="/categories" 
                onClick={handleSectionClick("categories")} 
                className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  />
                </svg>
                <span>Categories</span>
              </Link>
            </li>
          
          </ul>
        </div>
      
        <div className="mt-6">
          <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
          <ul className="mt-3">
            <li>
              <button
                onClick={handleSectionClick("profile")}
                className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all w-full text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                    data-original="#000000"
                  />
                </svg>
                <span>Profile</span>
              </button>
            </li>
            <li>
              <Link
                href="/logout"
                className="text-black hover:text-blue-600 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-[18px] h-[18px] mr-4"
                  viewBox="0 0 6.35 6.35"
                >
                  <path
                    d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                    data-original="#000000"
                  />
                </svg>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="ml-[250px] p-6 w-full">
        {activeSection === "posts" && (
          <div className="mx-14">
            <div className="text-right">
              <button
                onClick={handleAddArticleModalOpen}
                className="text-blue-600 text-2xl mb-4 mr-1"
              >
                [+]
              </button>
            </div>
            <ListArticle />
          </div>
        )}

        {activeSection === "categories" && (
          <div className="mt-6 mx-14">
            <div className="text-right">
              <button
                onClick={handleAddCategoryModalOpen} // Open category modal
                className="text-blue-600 text-2xl mb-4 mr-1"
              >
                [+]
              </button>
            </div>
            <CategoryList /> {/* Render the CategoryList component */}
          </div>
        )}

        {activeSection === "profile" && (
          <div className="mt-6 mx-14">
            <div className="mb-2">
              <ProfileInfo userId={1} />
            </div>
            <ProfileForm userId={1} onClose={() => setActiveSection(null)} />
          </div>
        )}

        {activeSection === "meditations" && (
          <div className="mt-6 mx-14">
            <MeditationAndProgramForm />
          </div>
        )}
      </div>

      {isAddArticleModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <AddArticle />
            <button
              onClick={handleAddArticleModalClose}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {isAddCategoryModalOpen && ( // Modal for adding a category
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <CategoryForm onSuccess={handleAddCategoryModalClose} /> {/* Render the CategoryForm component */}
            <button
              onClick={handleAddCategoryModalClose}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
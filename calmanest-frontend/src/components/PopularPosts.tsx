const PopularPosts: React.FC = () => {
    return (
       <div className="bg-white font-sans">
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">
            POPULAR BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/384/e9d24e71dd3de6b75a8dcf5621c000ef.jpeg"
              alt="Blog Post 1"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                10 FEB 2023 | BY JOHN DOE
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Igniting Your Imagination
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/256/ea709425b606771c2cd5ac873b174afa.jpeg"
              alt="Blog Post 2"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                7 JUN 2023 | BY MARK ADAIR
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Hacks to Supercharge Your Day
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/256/f273de111a14cf9e1ce3b9d33beba02e.jpeg"
              alt="Blog Post 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="Blog Post 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/256/10cb8eab47039a7b1f6c7cd24b16be32.jpeg"
              alt="Blog Post 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <img
              src="https://assets.calm.com/256/e415a1ff40a4a9a922764687bd1b732f.jpeg"
              alt="Blog Post 3"
              className="w-full h-96 object-cover"
            />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">
                5 OCT 2023 | BY SIMON KONECKI
              </span>
              <h3 className="text-xl font-bold text-gray-800">
                Trends and Predictions
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  accumsan, nunc et tempus blandit, metus mi consectetur felis
                  turpis vitae ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default PopularPosts;
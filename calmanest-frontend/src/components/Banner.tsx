const Banner: React.FC = () => {
  return (
    // <div
    //   id="carouselExampleCaptions"
    //   className="relative"
    //   data-twe-carousel-init=""
    //   data-twe-ride="carousel"
    // >
    //   {/* Carousel indicators */}
    //   <div
    //     className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    //     data-twe-carousel-indicators=""
    //   >
    //     {/* Indicators here */}
    //   </div>
    //   {/* Carousel items */}
    //   <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    //     {/* First item */}
    //     <div
    //       className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
    //       data-twe-carousel-active=""
    //       data-twe-carousel-item=""
    //       style={{ backfaceVisibility: "hidden" }}
    //     >
    //       <img
    //         src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
    //         className="block w-full h-[75%]" // Adjusted height here
    //         alt="..."
    //       />
    //       <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
    //         <h5 className="text-xl">First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     {/* Additional items */}
    //   </div>
    //   {/* Carousel controls */}
    //   {/* Previous and Next buttons */}
    // </div>
    <div className="max-w-7xl mx-auto flex md:items-center max-md:flex-col bg-blue-200 px-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif] mt-4">
    <p className="text-gray-600 text-base flex-1">
      Don't miss out on our amazing summer sale! Get up to 50% off on a wide range
      of products. Make the most of your summer shopping.
    </p>
    <div className="max-md:mt-6">
      <button
        type="button"
        className="bg-md-yellow  text-white font-semibold py-3 px-8 rounded-full text-sm hover:bg-dark-blue md:ml-6 "
      >
        Get started
      </button>
    </div>
  </div>
  
  );
};

export default Banner;
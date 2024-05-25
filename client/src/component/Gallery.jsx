import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllImages');
      console.log(response.data.data);
      setGalleryData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = (eventIndex, imageIndex) => {
    setSelectedImageIndex({ eventIndex, imageIndex });
  };
  
  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-[100vw] flex flex-wrap bg-[url('https://th.bing.com/th/id/OIG.WOa0Tj86Y6kZca48_19W?pid=ImgGn')] bg-cover py-16">
      <div className="w-[80%] sm:w-[70%] p-2 shadow-2xl bg-white bg-opacity-50 shadow-blue-950 m-auto flex flex-wrap">
        {galleryData.map((data, eventIndex) => (
          <div key={data._id} className="flex flex-col w-full ">
            <h1 className="ml-2 mt-4 text-2xl font-bold border-b-2 pb-2">{data.event}</h1>
            <div className="flex w-full sm:flex-row flex-col flex-wrap">

              {data.imageUrl.map((imgUrl, imageIndex) => (
                <div
                  key={imageIndex}
                  className="lg:w-[26%] sm:w-[35%] w-[80%] cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-3 flex flex-col p-3 rounded-3xl shadow-xl shadow-blue-300 m-8"
                  onClick={() => handleImageClick(eventIndex, imageIndex)}
                >
                  
                  <img
                    className="sm:h-[270px] p-3 rounded-3xl h-[240px]"
                    src={imgUrl.trim()} // Trim any leading or trailing spaces
                    alt="Loading..."
                  />
                  <p className="ml-[40%] text-gray-600 font-bold text-base">
                    {formatDate(data.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <Modal
      images={galleryData[selectedImageIndex.eventIndex].imageUrl.map(
        (imgUrl) => imgUrl.trim()
      )}
      selectedIndex={selectedImageIndex.imageIndex}
      onClose={handleCloseModal}
    />
  </div>
)}
    </div>
  );
}

const Modal = ({ images, selectedIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(selectedIndex);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75" onClick={onClose}></div>
      <div className="relative cursor-pointer">
        {/* Render the current image */}
        <img className="max-h-screen" src={images[currentImageIndex]} alt="" />
        {/* Render navigation arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={handlePrevious}
        >
          {/* Previous arrow */}
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={handleNext}
        >
          {/* Next arrow */}
          &gt;
        </button>
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;









// import React, { useEffect, useState } from 'react';

// const Carousel = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const images = [
//         'https://www.labiotech.eu/wp-content/uploads/2017/07/shutterstock_663820243.jpg',
//         'https://t4.ftcdn.net/jpg/01/64/31/49/360_F_164314960_b3nO6iefRT71ZerKf3pnYQ2YWQT8YwAz.jpg',
//         'https://www.labiotech.eu/wp-content/uploads/2017/07/shutterstock_663820243.jpg',
//         'https://t4.ftcdn.net/jpg/01/64/31/49/360_F_164314960_b3nO6iefRT71ZerKf3pnYQ2YWQT8YwAz.jpg',
//         'https://www.labiotech.eu/wp-content/uploads/2017/07/shutterstock_663820243.jpg',
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div id="gallery" className="relative w-full" data-carousel="slide">
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 {console.log(images)}
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`duration-700 ease-in-out ${index === currentImageIndex ? 'block' : 'hidden'
//                             }`}
//                         data-carousel-item={index === currentImageIndex ? 'active' : ''}
//                     >
//                         <img
//                             src={image}
//                             className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             alt=""
//                         />
//                     </div>
//                 ))}
//             </div>
//             <button
//                 type="button"
//                 className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 data-carousel-prev
//                 onClick={() =>
//                     setCurrentImageIndex((prevIndex) =>
//                         (prevIndex - 1 + images.length) % images.length
//                     )
//                 }
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 19l-7-7 7-7"
//                         />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button
//                 type="button"
//                 className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//                 data-carousel-next
//                 onClick={() =>
//                     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
//                 }
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg
//                         className="w-4 h-4 text-white dark:text-gray-800"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                         />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     );
// };

// export default Carousel;


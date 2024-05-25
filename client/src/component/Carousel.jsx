import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllImages');
      const images = response.data.data.reduce((acc, curr) => {
        return [...acc, ...curr.imageUrl.map(url => url.split(', ')).flat()];
      }, []);
      const top5Images = images.slice(0, 5);
      setGalleryData(top5Images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryData]);


  return (
    <div id="gallery" className="relative cursor-pointer w-[70vw] border border-transparent rounded-3xl shadow-[inset_20px_20px_100px_40px_#FFFFFF,20px_20px_100px_40px_#81e6d9] outline outline-white outline-offset-8 ring-offset-0 ring-1 ring-white" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-3xl md:h-96">
        {galleryData.map((image, index) => (
          <div
            key={index}
            onClick={() => { navigate('/gallery') }}
            className={`duration-700 absolute inset-0 flex justify-center transform ${index === currentImageIndex ? 'translate-x-0' : index < currentImageIndex ? '-translate-x-full' : 'translate-x-full'
              }`}
            data-carousel-item={index === currentImageIndex ? 'active' : ''}
          >
            <img src={image} alt="Image" className="object-contain h-full" />
            <div className="absolute inset-0 overflow-hidden bg-transparent">
              <div className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r via-transparent from-white to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-[25%] h-full bg-gradient-to-l via-transparent from-white to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
          )
        }
      >
        <span className="inline-flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="sm:w-4 w-3 h-4 text-white hover:text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() =>
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length)
        }
      >
        <span className="inline-flex  items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="sm:w-4 w-3 h-4 text-white hover:text-white dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

// return (
//   <div id="gallery"  className="relative w-[70vw] rounded-3xl" data-carousel="slide">
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//       {galleryData.map((image, index) => (
//         <div
//           key={index}
//           className={`duration-700 ease-in-out ${
//             index === currentImageIndex ? 'block' : 'hidden'
//           }`}
//           data-carousel-item={index === currentImageIndex ? 'active' : ''}
//         >{console.log(image)}
//           <img
//           onClick={()=>{navigate('/gallery')}}
//             src={image}
//             className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt=""
//           />
//         </div>
//       ))}
//     </div>
//     <button
//       type="button"
//       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       data-carousel-prev
//       onClick={() =>
//         setCurrentImageIndex(
//           (prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length
//         )
//       }
//     >
//       <span className="inline-flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg
//           className="sm:w-4 w-3 h-4 text-white hover:text-white dark:text-gray-800"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//         <span className="sr-only">Previous</span>
//       </span>
//     </button>
//     <button
//       type="button"
//       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       data-carousel-next
//       onClick={() =>
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryData.length)
//       }
//     >
//       <span className="inline-flex  items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//         <svg
//           className="sm:w-4 w-3 h-4 text-white hover:text-white dark:text-gray-800"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//         <span className="sr-only">Next</span>
//       </span>
//     </button>
//   </div>
// );


export default Carousel;
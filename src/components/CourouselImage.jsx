import { useEffect, useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
function CourouselImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const imageContents = [
    'Welcome to Image 1',
    'Discover Image 2',
    'Amazing Image 3',
    'Explore Image 4',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="relative w-full h-3/4 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-lg z-10"
      >
        &#10094;
      </button>

      {/* The image container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move images horizontally based on currentIndex
        }}
      >
        {images.map((image, index) => (
          <div className="relative w-full h-full flex-shrink-0" key={index}>
            {/* Image */}
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[600px]  object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold">
              {imageContents[index]} {/* Show content based on index */}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-lg z-10"
      >
        &#10095;
      </button>
    </div>
  );
}

export default CourouselImage;

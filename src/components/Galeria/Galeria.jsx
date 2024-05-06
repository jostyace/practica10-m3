import { useState, useEffect } from 'react';
import { PhotoService } from '../PhotoService';



export const Galeria = () => {

    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      PhotoService.getImages().then(setImages);
    }, []);
  
    const handleThumbnailClick = index => {
      setActiveIndex(index);
    };
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const nextImage = (event) => {
      event.stopPropagation();
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = (event) => {
      event.stopPropagation();
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="relative w-4/5 mx-auto">
        {images.length > 0 && (
          <>
            <img src={images[activeIndex].itemImageSrc} className="w-full cursor-pointer" alt={images[activeIndex].alt} onClick={toggleModal} />
            <div className="flex justify-center gap-2.5 mt-2.5">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.thumbnailImageSrc}
                  className={`w-12 h-12 cursor-pointer ${index === activeIndex ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}
                  alt={img.alt}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center" onClick={toggleModal}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <button onClick={prevImage} className="text-white text-2xl select-none px-5">&laquo;</button>
                    <img src={images[activeIndex].itemImageSrc} className="max-w-90 max-h-80" alt="Modal content" />
                    <button onClick={nextImage} className="text-white text-2xl select-none px-5">&raquo;</button>
                  </div>
                  <div className="flex justify-center gap-2.5 mt-2.5">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img.thumbnailImageSrc}
                        className={`w-12 h-12 cursor-pointer ${index === activeIndex ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}
                        alt={img.alt}
                        onClick={(event) => {
                          event.stopPropagation(); 
                          handleThumbnailClick(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
              )
}

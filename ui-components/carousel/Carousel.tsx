import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

type CarouselProps = {
    cards: JSX.Element[];
    className?: string;
}

export default function Carousel({ cards }: CarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(3); 
  const [visibleProducts, setVisibleProducts] = useState(cards.slice(currentIndex, currentIndex + windowSize));

  useEffect(() => {
      const updateItemsToShow = () => {
        if (window.innerWidth >= 1024) {
          setWindowSize(3);
        } else if (window.innerWidth >= 768) {
          setWindowSize(2);
        } else {
          setWindowSize(1);
        }
      };
      updateItemsToShow();

      // Add listener
      window.addEventListener("resize", updateItemsToShow);

      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);
  
  useEffect(() => {
    setVisibleProducts(cards.slice(currentIndex, currentIndex + windowSize));
  }, [currentIndex, windowSize, cards]);

  function nextSlide(): void {
    setCurrentIndex((prevIndex) => 
      prevIndex + windowSize + 1 > cards.length ? prevIndex : prevIndex + 1
    );
  };

  function prevSlide(): void {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? 0 : prevIndex - 1
    );
  };

  return (
    <div className={`relative h-108 flex gap-x-8 px-8 py-4 overflow-y-hidden overflow-x-scroll w-full [&::-webkit-scrollbar]:hidden transition-transform duration-300`}>
      {visibleProducts.map((product) => (product))}
      <Button isIconOnly className="absolute bg-white hover:border-1 hover:border-gray-200 left-0 top-1/2 -translate-y-1/2 p-2 shadow-lg z-10 opacity-30" radius="full" size="lg" onPress={prevSlide}>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </Button>
      <Button isIconOnly className="absolute bg-white hover:border-1 hover:border-gray-200 right-0 top-1/2 -translate-y-1/2 p-2 shadow-lg z-10 opacity-30" radius="full" size="lg" onPress={nextSlide}>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </Button>
    </div>
  );
};
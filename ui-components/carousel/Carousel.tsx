import { Button } from "@heroui/button";
import { useState } from "react";

type CarouselProps = {
    cards: React.ReactNode[];
}

export default function Carousel({ cards }: CarouselProps): JSX.Element {
  const card2s = [0, 1,2,3,4,5];
  const [index, setIndex] = useState(0);
  const [displayedItems, setDisplayItems] = useState([])

  const cardWidth = 350;

  function nextSlide(): void {
    setIndex((prev) => Math.min(prev + 1, card2s.length - 1));
  };

  function prevSlide(): void {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={`relative my-4 h-100 flex gap-x-8 overflow-y-hidden overflow-x-scroll w-full [&::-webkit-scrollbar]:hidden`}>
      <div className="flex gap-x-8 mt-4 px-8 w-full">
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
></div>
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
></div>
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
> </div>
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
></div>
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
></div>
        <div className={`bg-green-200 w-1/3 flex-none h-full rounded-xl transition-transform ease-in-out duration-500`} style={{ transform: `translateX(-${index * cardWidth}px)` }}
></div>
      </div>
        

        <Button isIconOnly className="absolute bg-white border-3 left-0 top-1/2 -translate-y-1/2 p-2 shadow-lg z-10" radius="full" size="lg" onPress={prevSlide}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </Button>
        <Button isIconOnly className="absolute bg-white border-3 right-0 top-1/2 -translate-y-1/2 p-2 shadow-lg z-10" radius="full" size="lg" onPress={nextSlide}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </Button>
      </div>
  );
};
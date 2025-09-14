type CarouselProps = {
    cards: JSX.Element[];
}

export default function Carousel({cards}: CarouselProps): JSX.Element {
    return (
        <div className="overflow-x-scroll">
           {cards.map(card => card)}
        </div>
    )
}
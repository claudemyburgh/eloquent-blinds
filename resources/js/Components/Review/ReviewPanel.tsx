import React, { MutableRefObject, useEffect, useRef } from "react";
import reviews from "@/reviews-dummy";
import ReviewCard from "@/Components/Review/ReviewCard";
import Masonry from "masonry-layout";
import ReviewStats from "@/Components/Review/ReviewStats";

const ReviewPanel = () => {
    const gridRef: MutableRefObject<any> = useRef();

    useEffect(() => {
        const masonry = new Masonry(gridRef.current, {
            itemSelector: ".grid-item",
            resize: true,
            stagger: 2,
            // fitWidth: true,
            // gutter: 50,
            // columnWidth: 150,
        });

        return masonry.destroy;
    }, []);

    return (
        <div className={`relative w-full`}>
            <div ref={gridRef} className={`-mx-4 md:-mx-12 `}>
                <ReviewStats
                    className={`grid-item w-full md:w-1/2 lg:w-1/3 p-4 `}
                />

                {reviews.map((data) => (
                    <div
                        key={data.id}
                        className={`grid-item w-full md:w-1/2 lg:w-1/3 p-4 `}
                    >
                        <ReviewCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewPanel;

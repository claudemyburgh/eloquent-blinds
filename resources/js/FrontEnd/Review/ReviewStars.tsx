import React, { FC } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/lib/helpers";

interface ReviewStarProps {
    review: {
        rating: number;
    };
}

const ReviewStars: FC<ReviewStarProps> = ({ review }) => {
    return (
        <div className="mt-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                    key={rating}
                    className={classNames(
                        review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

export default ReviewStars;

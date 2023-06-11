import React from "react";
import ReviewStars from "@/FrontEnd/Review/ReviewStars";
import { classNames } from "@/lib/helpers";

interface DataProps {
    data: {
        id: number;
        rating: number;
        avatar: string;
        author: string;
        content: string;
    };

    className?: string;
}

const ReviewCard = ({ data }: DataProps) => {
    return (
        <div
            className={`card p-4 md:p-6 space-y-4 rounded-lg dark:bg-gray-900 bg-gray-200 text-gray-500 border border-gray-300 dark:border-gray-800 ${classNames}`}
        >
            <div
                className={`text-sm space-y-4`}
                dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>

            <div className={`flex space-x-4`}>
                <div>
                    <img
                        src={data.avatar}
                        alt={data.author}
                        className={`h-12 w-12 rounded-full`}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="font-bold text-sm text-gray-500">
                        {data.author}
                    </div>
                    <ReviewStars review={data} />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;

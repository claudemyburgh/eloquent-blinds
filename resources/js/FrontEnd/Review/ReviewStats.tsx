import React, { FC } from "react";
import { classNames } from "@/lib/helpers";
import { StarIcon } from "@heroicons/react/20/solid";
import logo from "../../../img/google-logo.svg";

const reviews = {
    average: 4,
    totalCount: 1624,
    counts: [
        { rating: 5, count: 1019 },
        { rating: 4, count: 162 },
        { rating: 3, count: 97 },
        { rating: 2, count: 199 },
        { rating: 1, count: 147 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
    ],
};

interface Props {
    className?: string;
}

const ReviewStats: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <div
                className={`p-4 md:p-6 relative card rounded-lg dark:bg-gray-900 bg-gray-50 text-gray-500 border border-gray-200 dark:border-gray-800 ${classNames}`}
            >
                <div className="lg:col-span-4">
                    <img
                        height={37}
                        width={124}
                        loading={`lazy`}
                        className={`h-10 mb-2`}
                        src={logo}
                        alt="logo icon"
                    />
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
                        Customer Reviews
                    </h2>
                    <div className="mt-3 flex items-center ">
                        <div>
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating
                                                ? "text-amber-400"
                                                : "text-gray-300",
                                            "flex-shrink-0 h-5 w-5"
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">
                                {reviews.average} out of 5 stars
                            </p>
                        </div>
                        <p className="ml-2 text-sm text-gray-900 dark:text-gray-200">
                            Based on {reviews.totalCount} reviews
                        </p>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Review data</h3>

                        <dl className="space-y-3">
                            {reviews.counts.map((count) => (
                                <div
                                    key={count.rating}
                                    className="flex items-center text-sm"
                                >
                                    <dt className="flex-1 flex items-center">
                                        <p className="w-3 font-medium text-gray-900 dark:text-gray-500">
                                            {count.rating}
                                            <span className="sr-only">
                                                {" "}
                                                star reviews
                                            </span>
                                        </p>
                                        <div
                                            aria-hidden="true"
                                            className="ml-1 flex-1 flex items-center"
                                        >
                                            <StarIcon
                                                className={classNames(
                                                    count.count > 0
                                                        ? "text-amber-400"
                                                        : "text-gray-300",
                                                    "flex-shrink-0 h-5 w-5"
                                                )}
                                                aria-hidden="true"
                                            />

                                            <div className="ml-3 relative flex-1">
                                                <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                                                {count.count > 0 ? (
                                                    <div
                                                        className="absolute inset-y-0 bg-amber-400 border border-amber-400 rounded-full"
                                                        style={{
                                                            width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                                        }}
                                                    />
                                                ) : null}
                                            </div>
                                        </div>
                                    </dt>
                                    <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900 dark:text-gray-500">
                                        {Math.round(
                                            (count.count / reviews.totalCount) *
                                                100
                                        )}
                                        %
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            Share your thoughts
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            If you’ve used this product, share your thoughts
                            with other customers
                        </p>

                        <a
                            href="https://g.page/r/CXWNSZcI_nGmEB0/review"
                            target={`_blank`}
                            className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                        >
                            Write a review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewStats;

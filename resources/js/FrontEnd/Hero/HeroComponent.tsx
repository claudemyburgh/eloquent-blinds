import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";

const HeroComponent = () => {
    return (
        <div className="relative isolate overflow-hidden">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-primary-500/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={100}
                        height={100}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-primary-500/10 dark:fill-gray-800/20"
                >
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
            </svg>
            <svg
                viewBox="0 0 1108 632"
                aria-hidden="true"
                className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
                <path
                    className={`fill-primary-500`}
                    // fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                    fillOpacity=".2"
                    d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                />
                <defs>
                    <linearGradient
                        id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                        x1="1220.59"
                        x2="-85.053"
                        y1="432.766"
                        y2="638.714"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#4F46E5" />
                        <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-4">
                            <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20">
                                What's new
                            </span>
                            <a
                                href={`https://view.publitas.com/e-books/quantum-signature/page/1`}
                                target={`_blank`}
                                className="inline-flex group uppercase items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
                            >
                                <span>E-Catalogue</span>
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-[5px]"
                                    aria-hidden="true"
                                />
                            </a>
                        </a>
                    </div>
                    <h1 className="mt-10 text-4xl font-black tracking-tight text-gray-800 dark:text-white sm:text-6xl">
                        Supplier and installer of top quality blinds.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        We offer a wide range of high-quality blinds at
                        affordable prices. Our blinds are perfect for any room
                        in the house and will add style and function to your
                        space. We have a variety of options to choose from,
                        including Aluminium Blinds , Bamboo Blinds , Basswood
                        Blinds , Honeycomb Blinds , Roller Blinds , Venetian
                        Blinds , and Zebra Blinds . At Eloquent Blinds, we
                        believe that the installation of your blinds should be
                        just as hassle-free as the purchasing process. That's
                        why we offer professional installation services for all
                        of our blinds.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href={route("contact")}
                            className="rounded-md bg-primary-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                        >
                            Get a free quote
                        </Link>
                        <Link
                            href={route("contact")}
                            className="text-base font-semibold leading-7 text-white"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;

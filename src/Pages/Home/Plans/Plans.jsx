const Plans = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold sm:text-5xl">Premium Plans</h3>
                <p className="text-gray-600 pb-10">
                   These are the list of all plans given by the newspaper company. <br />
                    People can choose different kind of plans as their reading needs.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                {/* first plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border-2 hover:shadow-md  hover:duration-500">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Starter
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Free
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/1 month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-green-600 bg-green-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 10 users </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-red-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-red-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                                <span className="text-gray-700"> Phone support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-red-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                                <span className="text-gray-700"> Community access </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* second plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border-2 hover:shadow-md  hover:duration-500">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                30$
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-green-600 bg-green-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 20 users </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 5GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-red-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                                <span className="text-gray-700"> Phone support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-red-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                                <span className="text-gray-700"> Community access </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* third plan */}
                <div className="divide-y divide-gray-200 rounded-2xl border-2 hover:shadow-md  hover:duration-500">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Enterprise
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                100$
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>

                        <a
                            className="mt-4 block rounded border border-green-600 bg-green-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500 sm:mt-6"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 50 users </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> 20GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Phone support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-green-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Community access </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
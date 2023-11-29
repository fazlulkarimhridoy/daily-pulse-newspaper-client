import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Users stats
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        All users are shown below. <br />
                        And among them there are regular users as well as premium users count.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div
                            className="flex flex-col rounded-lg border-2 hover:shadow-md hover:duration-500 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                All Users
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                <CountUp
                                    start={1}
                                    end={250}
                                    duration={5}
                                />
                            </dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg border-2 hover:shadow-md hover:duration-500 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Regular Users
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                <CountUp
                                    start={1}
                                    end={159}
                                    duration={5}
                                />
                            </dd>
                        </div>

                        <div
                            className="flex flex-col rounded-lg border-2 hover:shadow-md  hover:duration-500 px-4 py-8 text-center"
                        >
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Premium Users
                            </dt>

                            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
                                <CountUp
                                    start={1}
                                    end={91}
                                    duration={5}
                                />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
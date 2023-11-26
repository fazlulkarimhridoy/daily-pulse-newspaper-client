
const Publishers = () => {
    return (
        <section className="py-6 text-gray-800">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold sm:text-5xl">All Publishers</h3>
                    <p className="text-gray-600">
                        These are the list of all of our publishers from gaza city. <br />
                        Many of them are dead but some are not in this world now.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?0" />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                            <p className="text-sm text-gray-600">Web developer</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?1" />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                            <p className="text-sm text-gray-600">Web developer</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?2" />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                            <p className="text-sm text-gray-600">Web developer</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?3" />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                            <p className="text-sm text-gray-600">Web developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publishers;
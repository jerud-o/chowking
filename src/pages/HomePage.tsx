import React from 'react'

function HomePage() {
    return (
        <>
            <div className="relative w-full h-screen bg-brick bg-center bg-cover bg-repeat z-10">
                <div className="absolute w-full top-0 flex flex-row-reverse">
                    <div className="w-auto h-16 m-4">
                        <img className="object-contain w-full h-full" src="/logo.svg" alt="Logo" />
                    </div>
                </div>
                <div className="absolute w-full h-1/3 bg-circle bg-center bg-cover top-1/2 translate-y-[-50%]" />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="/splash_slide_1.png" className="xl:w-2xl" />
                        <div>
                            <p className="text-lg font-semibold tracking-wider text-white py-4">Pioneer of the Asian quick service restaurant concept in the Philippines, Chowking combines traditional Chinese cuisine with modern fast food service. Welcome to our corporate website!</p>
                            <button className="w-full bg-red-600 text-white font-bold tracking-wider py-2 px-6 rounded-lg">Watch Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full h-[80vh] relative">
                <div className="absolute w-full h-full bg-red-circle bg-center bg-cover"></div>
                <div className="glass-custom rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200 opacity-25"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">OUR MISSION</h2>
                        <p className="text-white">

                        </p>
                    </div>
                </div>
                <div className="glass-custom rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200 opacity-25"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">OUR VISION</h2>
                        <p className="text-white">

                        </p>
                    </div>
                </div>
                <div className="glass-custom rounded-lg shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gray-200 opacity-25"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">OUR VALUES</h2>
                        <p className="text-white">

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
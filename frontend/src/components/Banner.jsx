import React from 'react';
import banner from '../../public/Banner.png';
const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row '>
                {/* Left Side Content */}
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-30 md:my-10'>
                    <div className='space-y-6'>

                        <h1 className='text-3xl font-bold'>
                            Hello, welcome here to learn something <span className='text-pink-600'>new everyday!!!</span>
                        </h1>

                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, et? Quas atque obcaecati repellendus, dolore neque beatae. Asperiores.
                        </p>

                        {/* Email Input Field */}
                        <div>
                            <label className="w-full flex items-center gap-2 rounded border border-gray-400 focus-within:border-gray-700 focus-within:ring-0 focus-within:outline-none px-3 py-2">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-transparent outline-none focus:ring-0 focus:outline-none"
                                />
                            </label>

                        </div>

                        {/* Optional Validation Hint */}
                        <div className="validator-hint hidden">Enter valid email address</div>

                        {/* Button Below Email */}
                        <div>
                            <button className="btn btn-secondary mb-1.5">Secondary</button>
                        </div>
                    </div>
                </div>

                {/* Right Side Placeholder */}
                <div className='order-1 w-full md:w-1/2  mt-10'>
                    <img src={banner}  className="md:h-120 md:w-150" alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;

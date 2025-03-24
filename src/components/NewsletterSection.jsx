import React from 'react';
import { motion } from "framer-motion";
import { HiArrowRight } from 'react-icons/hi';
import { fadeIn } from '../ultils/motion';

const NewsletterSection = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="newsletter">
            <div className="bg-blue-600 rounded-2xl overflow-hidden">
                <div className="relative md:px-16 py-16 px-6 md:py-24">

                    {/* Gradient Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-diagonal hidden md:block"></div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left Content */}
                        <motion.div
                            className="text-white max-w-lg text-center md:text-left"
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView="show"
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                                Subscribe newsletter
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base">
                                Best cooks and best delivery guys all at your service. Hot tasty food
                            </p>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-0"
                            variants={fadeIn('up', 0.3)}
                            initial="hidden"
                            whileInView="show"
                        >
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
                            />
                            <button
                                className="w-full sm:w-auto cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2"
                            >
                                <span>Discover</span>
                                <HiArrowRight className="size-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;

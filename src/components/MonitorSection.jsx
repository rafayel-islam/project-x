import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../ultils/motion';

import monitorCardImg from '../assets/monitor-card.webp';

const MonitorSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                {/* Left Section */}
                <motion.div
                    className="md:w-1/2 w-full"
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                >
                    <p className="text-green-500 font-semibold">MONITOR</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-3/5">
                        Introducing best mobile carousels
                    </h2>
                    <p className="text-gray-600 mb-8 md:w-4/5">
                        Before the ship is really back. Round, round, all around the world.
                        Round, all around the world. Round, all around the world.
                        Round, all around the world.
                    </p>
                    <a
                        href="#"
                        className="text-blue-500 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                    >
                        Learn more about monitoring<span className="text-2xl">→</span>
                    </a>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="md:w-1/2 w-full"
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView="show"
                >
                    <img
                        src={monitorCardImg}
                        alt="Schedule Image"
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default MonitorSection;

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../ultils/motion'

const PurposeSection = () => {
    const features = [
        {
            icon: "🟣",
            title: "Built for impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            icon: "🔴",
            title: "In sync with you",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
    ];

    return (
        <section className='w-full bg-gray-50 py-16 px-4 sm:px-8' id='about'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                    {/* Heading Text with fade-in animation */}
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                    >
                        <p className='text-sm text-purple-600 font-medium mb-2'>ACHIEVE MORE</p>
                        <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>
                            Purpose of a convoy is to keep your team
                        </h2>
                    </motion.div>

                    {/* Bullet Point section with fade-in animation */}
                    <motion.div
                        className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-center gap-8'
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView="show"
                    >
                        {
                            features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className='flex items-start gap-4'
                                    variants={fadeIn('up', 0.4 + index * 0.1)}

                                >
                                    <span className='w-12 h-12 flex items-center justify-center rounded-lg'>{feature.icon}</span>
                                    <div>
                                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                                        <p className='text-gray-600'>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default PurposeSection

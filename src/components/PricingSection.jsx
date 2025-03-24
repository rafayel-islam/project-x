import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../ultils/motion'

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);

    // calculate the price based on the product count
    const starterPrice = Math.round(4000 * (productCount / 50))
    const businessPrice = Math.round(7500 * (productCount / 50))

    return (
        <section className='py-20 px-4 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                {/* Title with fade-in animation */}
                <motion.h2
                    className='text-3xl md:text-4xl font-bold text-center mb-16'
                    variants={textVariant(0.2)}
                    initial='hidden'
                    whileInView='show'
                >
                    Pricing
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* starter plan with fade-in animation */}
                    <motion.div
                        className='bg-white p-8 rounded-lg shadow-lg'
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView='show'
                    >
                        <h3 className='text-xl text-gray-600 mb-6'>Starter</h3>
                        <p className='text-xl font-bold mb-6'>${starterPrice}/mo</p>
                    </motion.div>

                    {/* business plan with fade-in animation */}
                    <motion.div
                        className='bg-white p-8 rounded-lg shadow-lg'
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView='show'
                    >
                        <h3 className='text-xl text-gray-600 mb-6'>Business</h3>
                        <p className='text-xl font-bold mb-6'>${businessPrice}/mo</p>
                    </motion.div>
                </div>

                <div className='max-w-xl mx-auto'>
                    <p className='text-center text-gray-600 mt-4 mb-4'>{productCount} products</p>
                    <div className='relative px-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xs sm:text-sm text-gray-600'>1</span>
                            <input className='flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' type="range" min="1" max="50" value={productCount} onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-xs sm:text-sm text-gray-600'>50</span>
                        </div>
                    </div>

                    {/* Call to action button with scale animation */}
                    <motion.div
                        className='text-center mt-12'
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView='show'
                    >
                        <p className='text-xl text-gray-600 mb-4'>Ready to get started?</p>
                        <motion.button
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView='show'
                            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer'>
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection

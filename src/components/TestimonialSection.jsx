import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scale } from '../ultils/motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Navigation } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

const TestimonialSection = () => {
  return (
    <motion.section
      className='py-16 px-4 max-w-7xl mx-auto'
      id='testimonials'
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
    >
      {/* Section Heading */}
      <motion.div
        className='text-center mb-12'
        variants={fadeIn('up', 0.2)}
      >
        <h2 className='text-3xl font-bold md:text-4xl mb-4'>What our happy clients say</h2>
        <p className='text-gray-600'>Things that make it the best place to start trading</p>
      </motion.div>

      {/* Swiper Container */}
      <motion.div
        className='relative'
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
      >
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='h-full md:py-12 py-4'>
              <motion.div
                className='text-center bg-white rounded-lg shadow-md h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300'
                variants={fadeIn('up', index * 0.2)}
              >
                <div className='w-24 h-24 mx-auto mb-4'>
                  <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex justify-center mb-2'>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className='text-yellow-400'>★</span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-3'>{testimonial.name}</h3>
                <p className='text-gray-600'>{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className='flex justify-center gap-4 md:mt-8 mt-4'>
          <motion.button
            className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'
            variants={fadeIn('left', 0.3)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            <BsChevronLeft className='size-6' />
          </motion.button>

          <motion.button
            className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'
            variants={fadeIn('right', 0.3)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
          >
            <BsChevronRight className='size-6' />
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default TestimonialSection;

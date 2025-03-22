import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint]

  return (
    <div className='w-full overflow-hidden px-4 sm:px-6 lg:px-8 container gap-8 mx-auto py-20 flex sm:flex-row flex-col sm:items-center items-start relative'>
      <div className='w-[280px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white px-6 py-2 z-10 sm:text-base text-xl font-bold text-left'>
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className='relative w-full overflow-hidden'>
        <div className='flex animate-marquee whitespace-nowrap'>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt='company logo'
              className='mx-12 w-36 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
            />
          ))}

          {/* Duplicate Logos */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt='company logo'
              className='mx-12 w-36 h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default CompanyLogo

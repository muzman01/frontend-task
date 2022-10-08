import React from 'react'
import FiterHome from '../filter/FiterHome'
import HomeSearch from '../inputs/homesearhc'
import HomeTags from '../tags/HomeTags'
import HomeCards from '../cards/HomeCards'

function HomeMidle() {
  return (
    <section className='flex gap-6 flex-col w-full mx-auto ml-32 md:ml-24 sm:ml-5 mt-16'>
      <div>
        <HomeSearch />
      </div>
      <div>
        <HomeTags />
      </div>
      <div>
        <FiterHome />
      </div>
      <div>
        <HomeCards />
      </div>
    </section>
  )
}

export default HomeMidle
import React from 'react';

const Crawl = ({ crawl, title, date }) => {
  return ( 
    <section className='crawl-section'>
      <div className='crawl-div'>
        <p className='crawl-title'>{title}</p>
        <p className='crawl'>{date}</p> 
        <p className='crawl'>{crawl}</p>
        <p className='choose-category'>Choose A Category...</p>
      </div>
    </section>
  )
}

export default Crawl;
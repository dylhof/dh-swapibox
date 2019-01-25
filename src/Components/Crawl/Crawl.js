import React from 'react';

const Crawl = ({ crawl, title, date }) => {
  return (
    <div>
      <p className='crawl'>{crawl}</p>
      <p className='crawl'>{title}</p>
      <p className='crawl'>{date}</p> 
    </div>
  )
}

export default Crawl;
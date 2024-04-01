import React from 'react'
import AuthorCard from '../component/AuthorCard'

const AUthorInfo = ({pic}) => {
  return (
    <div className='container authorList'>
      {
        pic.map((item, i) => (
          <AuthorCard key={i} item={item} id={i} />
        ))
      }
    </div>
  )
}

export default AUthorInfo
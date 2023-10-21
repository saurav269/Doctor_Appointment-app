import React from 'react'
import FaqItem from './FaqItem'
import { faqs } from './../../assets/data/faqs';
const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,i) => <FaqItem item={item} key={i} />)}
    </ul>
  )
}

export default FaqList

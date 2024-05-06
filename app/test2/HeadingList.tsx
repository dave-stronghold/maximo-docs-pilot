import React from 'react';
import styles from './HeadingList.module.scss';
import {ArrowRightCircle} from 'lucide-react'
const HeadingList = ({ images, activeIndex, setActiveIndex }) => {
  return (
    <div className="my-4 absolute top-28 right-10 z-10">
      <ul className="flex flex-wrap flex-col w-72 content-start">
        {images.map((image, index) => (
          <li
            key={index}
            className={`${styles.litem} ${activeIndex === index ? styles.li_active : ''}`}
            // className="mx-2 text-sm cursor-pointer max-w-max mb-2 text-gray-500 "
            onClick={() => setActiveIndex(index)}
           
          >{(activeIndex === index)&&<ArrowRightCircle size={24}/>}
            {image.heading}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadingList;

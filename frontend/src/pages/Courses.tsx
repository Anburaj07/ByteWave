import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseCard from '../components/CourseCard';

const courseData = [
    { title: 'NODE', description: 'For the Role of a NODE Backend Developer',image:'data:image/png;base64,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' },
    { title: 'JAVA', description: 'For the Role of a JAVA Backend Developer',image:'data:image/png;base64,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' },
    { title: 'MERN', description: 'For the Role of a MERN Backend Developer',image:'data:image/png;base64,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' },
    { title: 'DSA', description: 'For the Role of a Backend Developer',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZxAQeUJ7WQx04wzAroUXZDE7gs7-h7Qkc8jFZbMkvBBfneo7I3Tx1O92Xo4LEjtrkEo&usqp=CAU' },
  ];

  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

const Courses = () => {
  return (
    <div className='p-4 mb-10'> 
      <Carousel responsive={responsiveConfig}>
      {courseData.map((card, index) => (
                            <div key={index} className='w-auto p-4'>
                            <CourseCard title={card.title} description={card.description} image={card.image} />
                            </div>
                        ))}
      </Carousel>
    </div>
  )
}

export default Courses
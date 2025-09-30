import React from 'react'
import CourseList from './components/CourseList'
export const metadata = {
  title: "Coursezone - Learn and Build Projects",
  description: "Explore a variety of courses to enhance your skills.",
};

const page = () => {
  return (
    <div>
        <CourseList />
    </div>
  )
}

export default page

    
    
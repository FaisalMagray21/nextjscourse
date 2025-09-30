"use client";

import React from 'react'
//import { FaGlobe, FaLock, FaMobileAlt, FaRobot, FaDatabase } from 'react-icons/fa'
import { courses} from '../data'
import Link from 'next/link'
const CourseList = () => {
  return (
    <div>
       <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-4 text-center">Wellcome to coursezone following courses we offer</h1>
        <div className="row w-100 justify-content-center">
          {courses.map((course) => (
            <div className="col-md-4 mb-4" key={course.id}>
              <div className="card p-4 text-center "style={{backgroundColor:"#1e293b",
                borderRadius:"12px",
                maxWidth:"300px",
                width:"100%",
                border:"1px solid #334155",
                transition:"transform 0.3s",
                boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor:"pointer",
              }}
              
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
              }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="card-body">
               <div className="card-icon display-4 mb-4 text-light">{course.icon}</div>

                  <h5 className="card-title text-light">{course.title}</h5>
                  <Link href={`/projects/coursezone/${course.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseList
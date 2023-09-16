import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
const Courses = ({ handleCourse, hours }) => {
  const [AllCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch('./Courses.json')
      .then(res => res.json())
      .then(data => setAllCourses(data));
  }, []);

  return (
    <div className="w-2/3 grid grid-cols-3 gap-5 ">
      {AllCourses.map(course => (
        <Course
          key={course.id}
          course={course}
          handleCourse={handleCourse}
          hours={hours}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;

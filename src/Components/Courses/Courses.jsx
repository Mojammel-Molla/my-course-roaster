import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
const Courses = ({ handleCourse, handlePrice, handleRemaining }) => {
  const [AllCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch('../../../public/Courses.json')
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
          handlePrice={handlePrice}
          handleRemaining={handleRemaining}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;

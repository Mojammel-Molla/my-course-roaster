import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
const Courses = () => {
  const [AllCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch('../../../public/Courses.json')
      .then(res => res.json())
      .then(data => setAllCourses(data));
  }, []);

  return (
    <div>
      <h1> Courses:{AllCourses.length}</h1>
      <Course AllCourses={AllCourses}></Course>
    </div>
  );
};

export default Courses;

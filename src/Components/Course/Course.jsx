const Course = ({ AllCourses }) => {
  console.log(AllCourses);
  const { title } = AllCourses;
  return (
    <div>
      <h1>Title:{title}</h1>
    </div>
  );
};

export default Course;

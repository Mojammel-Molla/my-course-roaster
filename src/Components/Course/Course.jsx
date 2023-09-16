import Dollar from '../../assets/dollar-sign 1.png';
import Frame from '../../assets/Frame (1).png';
const Course = ({ course, handleCourse }) => {
  const { title, image, description, duration, price } = course;
  return (
    <div className="shadow-lg rounded-lg">
      <div>
        <img className="w-72 h-36 rounded-md" src={image} alt="" />
      </div>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-slate-400">{description}</p>
      <div className="flex justify-around py-2 text-slate-400">
        <img src={Dollar} alt="" />
        <span>Price:{price}</span>
        <img src={Frame} alt="" />
        <span>Credit:{duration} hr</span>
      </div>
      <button
        onClick={() => {
          handleCourse(course);
        }}
        className="bg-blue-600 text-white my-2 px-24 py-2 rounded-lg"
      >
        Select
      </button>
    </div>
  );
};

export default Course;

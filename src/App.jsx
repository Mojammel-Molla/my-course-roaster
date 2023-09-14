import './App.css';
import Carts from './Components/Carts/Carts';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold py-5 my-5 bg-blue-200 rounded-lg">
          Courses of Freelancer Nasim
        </h1>
        <div className="flex justify-between gap-5">
          <Courses></Courses>
          <Carts></Carts>
        </div>
      </div>
    </>
  );
}

export default App;

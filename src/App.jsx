import { useState } from 'react';
import './App.css';
import Carts from './Components/Carts/Carts';
import Courses from './Components/Courses/Courses';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [hours, setHours] = useState(0);

  const handleCourse = course => {
    const newCartItems = [...cartItems, course];
    setCartItems(newCartItems);
  };
  const handlePrice = (price, newHours) => {
    setPrice(prices + price);
    setHours(hours + newHours);
  };
  const handleRemaining = hour => {
    setRemaining(remaining - hour);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold py-5 my-5 bg-blue-200 rounded-lg">
          Courses of Freelancer Nasim
        </h1>
        <div className="flex justify-between gap-5">
          <Courses
            handleCourse={handleCourse}
            handlePrice={handlePrice}
            handleRemaining={handleRemaining}
          ></Courses>
          <Carts
            cartItems={cartItems}
            prices={prices}
            remaining={remaining}
            hours={hours}
          ></Carts>
        </div>
      </div>
    </>
  );
}

export default App;

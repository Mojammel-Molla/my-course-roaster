import { useState } from 'react';
import './App.css';
import Carts from './Components/Carts/Carts';
import Courses from './Components/Courses/Courses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrice] = useState(0);
  const [hours, setHours] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleCourse = course => {
    let count = course.duration;
    cartItems.forEach(element => {
      count += element.duration;
    });

    const isExist = cartItems.find(item => item.id == course.id);
    if (isExist) {
      return toast.warn('You have already added!');
    } else {
      if (count <= 20) {
        const newCartItems = [...cartItems, course];
        setCartItems(newCartItems);
      }
    }
    if (count > 20) {
      return toast.warn('You have no hours left!');
    } else {
      setHours(count);
      setRemaining(20 - count);
    }

    let price = course.price;
    cartItems.forEach(item => {
      price += item.price;
    });
    setPrice(price);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold py-5 my-5 bg-blue-200 rounded-lg">
          Courses of Freelancer Nasim
        </h1>
        <div className="flex justify-between gap-5">
          <Courses handleCourse={handleCourse}></Courses>
          <Carts
            cartItems={cartItems}
            remaining={remaining}
            hours={hours}
            prices={prices}
          ></Carts>
        </div>
      </div>
      <ToastContainer position="top-center" />;
    </>
  );
}

export default App;

import Cart from './../Cart/Cart';
const Carts = ({ cartItems, prices, remaining, hours }) => {
  console.log(cartItems);
  return (
    <div className="w-1/3 bg-gray-100 rounded-md pt-5">
      <h1 className="text-blue-600 py-2 text-2xl font-semibold">
        Credit Hours Remaining: {remaining} hr
      </h1>
      <hr />
      <h1 className="text-3xl font-bold">Course Name:</h1>
      {cartItems.map(cartItem => (
        <Cart key={cartItem.id} cartItem={cartItem}></Cart>
      ))}
      <h2 className="text-lg font-medium">Total Credit Hours:{hours}</h2>
      <hr />
      <h1 className="text-lg font-medium">Total Price: {prices} USD</h1>
    </div>
  );
};

export default Carts;

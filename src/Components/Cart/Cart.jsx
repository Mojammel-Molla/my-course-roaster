const Cart = ({ cartItem }) => {
  const { title } = cartItem;
  console.log(title);
  return (
    <ol>
      <li className="text-xl font-extrabold bg-slate-200 my-2 py-2 rounded-lg mx-2">
        {title}
      </li>
    </ol>
  );
};

export default Cart;

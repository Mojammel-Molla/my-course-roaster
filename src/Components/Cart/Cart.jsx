const Cart = ({ cartItem, idx }) => {
  const { title } = cartItem;
  return (
    <ol>
      <li className="text-xl font-bold bg-slate-200 my-2 py-2 rounded-lg mx-2">
        {idx + 1}.{title}
      </li>
    </ol>
  );
};

export default Cart;

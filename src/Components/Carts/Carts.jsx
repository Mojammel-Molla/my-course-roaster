const Carts = () => {
  return (
    <div className="w-1/3 bg-gray-100 rounded-md pt-5">
      <h1 className="text-blue-600 py-2 text-2xl font-semibold">
        Credit Hours Remaining {0}hr
      </h1>
      <hr />
      <h1 className="text-3xl font-bold">Course Name:</h1>
      {}
      <h2 className="text-lg font-medium">Total Credit Hours:{}</h2>
      <hr />
      <h1 className="text-lg font-medium">Total Price:{0}USD</h1>
    </div>
  );
};

export default Carts;

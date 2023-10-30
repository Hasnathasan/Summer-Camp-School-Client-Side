

const ShowPopularClass = ({ eachClass }) => {
  const { class_name, class_image, price, available_seats, total_students } =
    eachClass;
  return (
    <div className="card card-compact border border-slate-100 transition-all duration-300 hover:shadow-xl dark:bg-blue-gray-500 dark:text-white  rounded w-full bg-base-100">
      <figure>
        <img className="h-48 w-full" src={class_image} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="text-xl font-bold">{class_name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-500 font-medium dark:text-white">
            Available Seats: {available_seats}
          </p>
          <p className="text-base text-right text-gray-500 font-medium dark:text-white">
            Students: {total_students}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-medium text-gray-500 dark:text-white">
            Price: ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowPopularClass;

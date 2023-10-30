import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import ShowPopularClass from "../../../Components/ShowPopularClass";
const PopularClasses = () => {
  const { isLoading: isPopularClassesLoading, data: popularClasses = [] } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: async() => {
        const res = await fetch('https://summer-camp-server-black.vercel.app/popularclasses');
        return res.json()
    },
  })
  console.log(isPopularClassesLoading);
  console.log(popularClasses);
  if (isPopularClassesLoading) {
    return <Loader></Loader>
  }
  return (
    <div className="grid grid-cols-12 mb-36">
      <div className="col-span-12 md:col-span-9 px-5">
        <h1 className="text-3xl my-12 font-medium text-slate-700">Popular Classes By out Instructor</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {popularClasses.map((eachClass) => (
          <ShowPopularClass key={eachClass._id} eachClass={eachClass}></ShowPopularClass>
        ))}
        </div>
        
      </div>
      <div className="col-span-12 bg-[#ededed] dark:bg-gray-700 dark:text-white md:col-span-3">
        <div className="py-12 px-4">
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">HOMEWORK PLANS</Link></p>
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">REGISTRATION DOCUMENTS</Link></p>
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">PRACTICAL LIFE IN SCHOOL</Link></p>
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">CHILD ATTENDANCE</Link></p>
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">HOMEWORK PLANS</Link></p>
          <p className="uppercase text-base border-b py-6 px-4 border-gray-300 text-gray-500 hover:text-gray-600"><Link to="/">HOMEWORK PLANS</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export default PopularClasses;

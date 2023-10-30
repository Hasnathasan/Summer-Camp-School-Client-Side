import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import ShowInstructor from "../../../Components/ShowInstructor";

const PopularInstructor = () => {
    const { isLoading: isPopularInstructors, data: popularinstructors = [] } = useQuery({
        queryKey: ['popularInstructors'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-server-black.vercel.app/popularinstructors');
            return res.json()
        },
      })
      console.log(popularinstructors);
      if(isPopularInstructors){
        return <Loader></Loader>
      }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 my-36 px-4 md:px-8 gap-8">
            {
                popularinstructors.map(instructor => <ShowInstructor key={instructor._id} instructor={instructor}></ShowInstructor>)
            }
        </div>
    );
};

export default PopularInstructor;
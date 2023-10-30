import Loader from "../../../Components/Loader";
import ShowInstructor from "../../../Components/ShowInstructor";
import useInstructors from "../../../Hooks/useInstructors";

const Instructors = () => {
    const [intructors, isIntructorsLoading] = useInstructors();
    console.log(intructors);
    if(isIntructorsLoading){
        return <Loader></Loader>;
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 my-36 px-4 md:px-8 gap-8">
            {
                intructors.map(instructor => <ShowInstructor key={instructor._id} instructor={instructor}></ShowInstructor>)
            }
        </div>
        </div>
    );
};

export default Instructors;
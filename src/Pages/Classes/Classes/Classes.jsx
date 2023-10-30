import Loader from "../../../Components/Loader";
import useApprovedClasses from "../../../Hooks/useApprovedClasses";
import useCheckUserRole from "../../../Hooks/useCheckUserRole";
import ShowClass from "../ShowClass/ShowClass";

const Classes = () => {
    const [approvedClasses, isApprovedClassesLoading] = useApprovedClasses();
    const [userRole, isUserRoleLoading] = useCheckUserRole()
      console.log(isApprovedClassesLoading);
      console.log(approvedClasses);
      if(isApprovedClassesLoading || isUserRoleLoading){
        return <Loader></Loader>;
      }
    return (
        <div>
            <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-16 py-36">
                {
                    approvedClasses.map(eachClass => <ShowClass key={eachClass._id} userRole={userRole.role} eachClass={eachClass}></ShowClass>)
                }
            </div>
        </div>
    );
};

export default Classes;
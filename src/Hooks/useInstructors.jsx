import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
     const { data: intructors, isLoading: isIntructorsLoading } = useQuery({
            queryKey: ['instructors'],
            queryFn: async() => {
                const res = await fetch('https://summer-camp-server-black.vercel.app/instructors');
                return res.json()
            },
          })
          return [intructors, isIntructorsLoading]
};

export default useInstructors;
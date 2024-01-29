import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    data: classes = [],
    isLoading: isClassesLoading,
    refetch: refetchClasses,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-camp-server-black.vercel.app/classes"
      );
      return res.json();
    },
  });
  console.log(classes);
  return [classes, isClassesLoading, refetchClasses];
};

export default useClasses;

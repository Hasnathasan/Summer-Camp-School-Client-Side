import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Feature = () => {
  const backgroundImageStyle = {
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://i.ibb.co/vkzn44b/kids-header.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "85vh", // Set the desired height
  };
  return (
    <div
      className="grid grid-cols-1 items-center md:grid-cols-2 gap-5 w-full bg-no bg-no-repeat bg-cover bg-center py-10 px-5 md:py-20 md:px-11 my-32"
      style={backgroundImageStyle}
    >
      <div>
        <h1 className="mb-4 font-extrabold text-blue-gray-500 dark:text-white text-4xl md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r   to-green-500 from-light-blue-300 ">
            Discover Excellence
          </span>{" "}
          With Camp Adventureland.
        </h1>
        <motion.div
         drag={true}
         whileHover={{rotate: 5, origin: "center"}}
         dragConstraints={{left:0, right: 0, top: 0, bottom: 0}}
         dragElastic={1.1}
         className="w-max"
         >
          <Button size="lg" color="white" className="flex items-center gap-3">
            Drag me where you want
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;

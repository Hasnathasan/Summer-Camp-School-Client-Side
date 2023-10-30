import { Carousel } from "flowbite-react";

const TopSlider = () => {
  return (
    <div className="h-96 md:h-[600px]">
      <Carousel className="">
      <div className="flex h-full items-center bg-no-repeat bg-cover bg-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=972&q=80"})`}}>
       
      </div>
      <div className="flex h-full bg-no-repeat bg-cover bg-center items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: `url(${"https://i.ibb.co/pjjLhWC/Website-Imagery-SCHOOLS-202223-cover-1920x752.jpg"})`}}>
       
      </div>
      <div className="flex h-full items-center bg-no-repeat bg-cover bg-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: `url(${"https://i.ibb.co/pjjLhWC/Website-Imagery-SCHOOLS-202223-cover-1920x752.jpg"})`}}>
        
      </div>
    </Carousel>
    </div>
  );
};

export default TopSlider;

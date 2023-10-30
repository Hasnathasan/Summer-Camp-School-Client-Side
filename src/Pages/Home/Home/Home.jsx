import Feature from "../Feature/Feature";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Feature></Feature>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Plans from "../Plans/Plans";
import Publishers from "../Publishers/Publishers";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Publishers></Publishers>
            <Statistics></Statistics>
            <Plans></Plans>
        </div>
    );
};

export default Home;
import Footer from "./components/footer/Footer"
import MainBlock from "./components/main-block/MainBlock";
import SliderSection from "./components/slider-section/SliderSection";
import NavigationBar from "./components/navbar/Navbar";
import LastBlock from "./components/last-block/LastBlock";

function App() {
    return (
        <>
            <NavigationBar/>
            <MainBlock/>
            <SliderSection/>
            <LastBlock/>
            <Footer/>
        </>
    );
}

export default App;

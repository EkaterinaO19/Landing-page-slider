import Footer from "./components/footer/Footer"
import MainBlock from "./components/main-block/MainBlock";
import NavigationBar from "./components/navbar/Navbar";
import LastBlock from "./components/last-block/LastBlock";
import ScrollableSlider from "./components/scrollable-slider/ScrollableSlider";

function App() {
    return (
        <>
            <NavigationBar/>
            <MainBlock/>
            <ScrollableSlider/>
            <LastBlock/>
            <Footer/>
        </>
    );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import MainBlock from "./components/main-block/MainBlock";
import SliderSection from "./components/slider-section/SliderSection";
import ScrollableSlider from "./components/scrollable-slider/ScrollableSlider";
import {pictures} from "./pictures";

function App() {
  return (
      <>
        <Navbar/>
        <MainBlock />
        <SliderSection/>
        <Footer/>
      </>
  // <ScrollableSlider pictures={pictures}/>
  );
}

export default App;

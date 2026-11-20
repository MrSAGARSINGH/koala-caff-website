import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/home/Hero/Hero";
import About from "./components/home/About/About";
import FeaturedMenu from "./components/home/FeaturedMenu/FeaturedMenu";
import Gallery from "./components/home/Gallery/Gallery";
import WhyChooseUs from "./components/home/WhyChooseUs/WhyChooseUs";
import Contact from "./components/home/Contact/Contact";
import FloatingSocial from "./components/FloatingSocial/FloatingSocial";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <FeaturedMenu />

        <Gallery />

        <WhyChooseUs />

        <Contact />

      </main>

      <Footer />

      <FloatingSocial />

    </>
  );
}

export default App;
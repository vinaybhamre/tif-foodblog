import AboutUs from "../components/about/AboutUs";
import LatestArticles from "../components/articles/LatestArticles";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <div className=" w-full h-full relative">
      <Header />
      <Hero />
      <AboutUs />
      <LatestArticles />
      <Footer />
    </div>
  );
};

export default Home;

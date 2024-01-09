import HeroImg from "./HeroImg";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <main className=" flex flex-col-reverse md:flex-row justify-between items-center md:justify-evenly w-full">
      <HeroTitle />
      <HeroImg />
    </main>
  );
};

export default Hero;

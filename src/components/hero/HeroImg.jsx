const HeroImg = () => {
  return (
    <div className="relative flex-grow w-full">
      <img
        src="/assets/tif_heroimg-mobile.png"
        alt="hero-img"
        className=" w-full h-full object-cover md:hidden"
      />
      <img
        src="/assets/tif-foodblog-heroimg.jpg"
        alt="hero-img"
        className="object-cover hidden md:block rounded-bl-[12.5rem] pl-6 pb-8 "
      />
      <img
        src="/assets/tif-herovector1.svg"
        alt="hero-vector"
        className="absolute top-0 md:-top-1 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImg;

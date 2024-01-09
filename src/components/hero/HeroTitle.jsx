const HeroTitle = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center md:items-start py-16 md:pl-28 md:py-0 w-full ">
      <div className=" w-72 md:w-96 flex flex-col justify-center md:justify-start items-center md:items-start gap-6 md:gap-10">
        <div className=" w-full px-1">
          <h1 className=" text-primary text-4xl md:text-6xl leading-[46px] font-bold text-center md:text-start md:leading-[69px]">
            Discover the <span className=" text-secondary">Best</span> Food and
            Drinks
          </h1>
        </div>
        <div className=" w-full px-2">
          <p className=" text-body text-center text-sm md:text-base md:text-start">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
        </div>
        <div>
          <button className=" px-7 py-2 text-sm bg-secondary text-white rounded-3xl font-bold leading-8 tracking-widest">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-evenly  items-center h-[32.25rem] w-full md:h-full ">
      <div>
        <img
          src="/assets/tif-aboutus-img.svg"
          alt="aboutus-img"
          className=" hidden md:block md:w-96 md:h-[28rem]"
        />
      </div>
      <div className=" w-96 md:w-[30rem] flex flex-col justify-center items-center md:items-start gap-6 px-[50px] md:px-0">
        <div className=" w-full px-1">
          <h2 className=" text-primary text-[26px] leading-[35px] md:text-[45px] md:leading-7 font-semibold text-center md:text-start">
            About Us
          </h2>
        </div>
        <div className=" w-full px-1">
          <p className=" text-body text-center md:text-start text-xs md:text-base leading-[21px] md:leading-7 font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. t has survived
            not only five centuries.
          </p>
        </div>
        <div>
          <button className=" px-6 py-1.5 text-xs md:text-base bg-secondary text-white rounded-3xl font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

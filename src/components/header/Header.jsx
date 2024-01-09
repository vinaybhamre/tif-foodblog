const Header = () => {
  return (
    <header className=" absolute top-0 p-4 w-full z-10">
      <div className=" flex justify-between h-16">
        <div>
          <img
            src="/assets/tif-foodblog-logo.svg"
            alt="logo"
            className="hidden md:block md:w-28 md:h-20 ml-24"
          />
        </div>
        <div>
          <button className=" text-white text-sm leading-11 font-semibold border border-white py-1.5 px-3 rounded-3xl cursor-pointer ">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

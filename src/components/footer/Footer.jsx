import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = ["About Us", "Products", "Career", "Contact Us"];

const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row items-center gap-8 p-12 md:gap-20 md:justify-evenly md:py-28">
      <div className=" w-64">
        <img
          src="/public/assets/tif-foodblog-logo.svg"
          alt="footer-logo"
          className=" w-40 h-32"
        />
      </div>
      <div className=" w-64 md:flex md:flex-col md:justify-between">
        <h3 className=" text-primary text-base md:text-xl font-semibold leading-[35px]">
          Contact Us
        </h3>
        <p className=" text-[#646874] text-xs md:text-base py-2">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className=" text-[#646874] text-xs md:text-base py-2">
          example2020@gmail.com
        </p>
        <p className=" text-[#646874] text-xs md:text-base py-2">
          (904) 443-0343
        </p>
      </div>
      <div className=" w-64">
        <h3 className=" text-primary text-base md:text-xl font-semibold leading-[35px] md:pb-6">
          More
        </h3>
        <ul className=" flex flex-col gap-4">
          {footerLinks.map((link) => (
            <li
              key={link}
              className=" text-[#646874] text-xs leading-[35px] md:text-base"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex flex-col justify-center items-center w-64 md:flex-col-reverse md:justify-between md:gap-28">
        <p className=" text-xs leading-8 md:text-base">
          © 2022 Food Truck Example
        </p>
        <div>
          <h3 className=" hidden md:block text-primary text-base md:text-xl font-semibold leading-[35px] md:pb-4">
            Social Links
          </h3>
          <div className=" flex gap-5">
            <Instagram className="  text-primary  w-4 h-4" />
            <Twitter className="  text-primary fill-primary w-4 h-4" />
            <Facebook className="  text-primary fill-primary w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

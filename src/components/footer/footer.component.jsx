import logo from "../../images/logo.svg"
import location from "../../images/icon-location.svg"
import phone from "../../images/icon-phone.svg"
import email from "../../images/icon-email.svg"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"



const Footer = () => {
  return (
    <footer className=" bg-footer-color w-full h-full text-gray-300 pt-64 px-5 mb-4 font-opensans relative z-20 md:px-20">
      <div className=" ml-5 mb-10"><img className="" src={logo} alt="logo" /></div>
      <div className=" md:flex md:justify-between">
        <div className="mb-4 text-left">
          <p className=" flex gap-7 max-w-xs md:max-w-sm"><img className=" object-contain mb-10" src={location} alt="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
        </div>

        <div className=" flex flex-col mb-16">
          <p className="flex gap-5 mb-5"><img className=" object-contain" src={phone} alt="" /> +1-543-123-4567</p>
          <p className="flex gap-5"><img className=" object-contain" src={email} alt="" /> example@fylo.com</p>
        </div>

        <div className="flex flex-col gap-2 mb-5 mt-10 md:mt-0">
          <a className="hover:text-white hover:font-semibold" href="/#">About Us</a>
          <a className="hover:text-white hover:font-semibold" href="/#">Jobs</a>
          <a className="hover:text-white hover:font-semibold" href="/#">Press</a>
          <a className="hover:text-white hover:font-semibold" href="/#">Blog</a>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <a className="hover:text-white hover:font-semibold" href="/#">Contact Us</a>
          <a className="hover:text-white hover:font-semibold" href="/#">Terms</a>
          <a className="hover:text-white hover:font-semibold" href="/#">Privacy</a>
        </div>

        <div className="flex gap-4 justify-center pb-5">
          <a href="/#"><FaFacebookF className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
          <a href="/#"><BsTwitter className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
          <a href="/#"><FiInstagram className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
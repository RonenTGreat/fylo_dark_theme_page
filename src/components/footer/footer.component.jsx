import logo from "../../images/logo.svg"
import location from "../../images/icon-location.svg"
import phone from "../../images/icon-phone.svg"
import email from "../../images/icon-email.svg"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"



const Footer = () => {
  return (
    <footer className=" bg-footer-color w-full h-full text-gray-200 pt-72 px-5 mb-4 font-opensans">
      <div className=" ml-5 mb-10"><img className="" src={logo} alt="logo" /></div>
      <div className="mb-4 text-left">
        <p className=" flex gap-7 max-w-xs"><img className=" object-contain mb-16" src={location} alt="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua</p>
      </div>

      <div className=" flex flex-col mb-16">
        <p className="flex gap-5 mb-5"><img className=" object-contain" src={phone} alt="" /> +1-543-123-4567</p>
        <p className="flex gap-5"><img className=" object-contain" src={email} alt="" /> example@fylo.com</p>
      </div>

      <div className="flex flex-col gap-2 mb-5 mt-10">
        <a href="/#">About Us</a>
        <a href="/#">Jobs</a>
        <a href="/#">Press</a>
        <a href="/#">Blog</a>
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <a href="/#">Contact Us</a>
        <a href="/#">Terms</a>
        <a href="/#">Privacy</a>
      </div>

      <div className="flex gap-4 justify-center pb-7">
        <a href="/#"><FaFacebookF className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
        <a href="/#"><BsTwitter className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
        <a href="/#"><FiInstagram className=" w-8 h-8 border rounded-full p-2 hover:text-mycyan hover:border-myblue" /></a>
      </div>
    </footer>
  );
}

export default Footer;
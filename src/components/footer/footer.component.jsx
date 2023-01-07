import logo from "../../images/logo.svg"
import location from "../../images/icon-location.svg"
import phone from "../../images/icon-phone.svg"
import email from "../../images/icon-email.svg"



const Footer = () => {
  return (
    <footer className=" bg-footer-color w-full text-gray-200 pt-72 px-5 mb-4">
      <div className=" ml-5 mb-10"><img className="" src={logo} alt="logo" /></div>
      <div className="mb-4 text-left">
        <p className=" flex gap-7"><img className=" object-contain mb-16" src={location} alt="" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure amet id cumque, nemo illo qui atque distinctio in itaque! Molestiae earum harum sint tenetur debitis temporibus id sapiente modi maxime.</p>
      </div>

      <div className=" flex flex-col mb-10">
        <p className="flex gap-5 mb-5"><img className=" object-contain" src={phone} alt="" /> +1-543-123-4567</p>
        <p className="flex gap-5"><img className=" object-contain" src={email} alt="" /> example@fylo.com</p>
      </div>

      <div className="flex flex-col mb-5 mt-10">
        <a href="/#">About Us</a>
        <a href="/#">Jobs</a>
        <a href="/#">Press</a>
        <a href="/#">Blog</a>
      </div>

      <div className="flex flex-col mb-5">
        <a href="/#">Contact Us</a>
        <a href="/#">Terms</a>
        <a href="/#">Privacy</a>
      </div>

      <div className="flex gap-4 justify-center pb-7">
        <a href="/#"><img className=" w-8 h-8 py-2 border rounded-full" src={facebook} alt="facebook" /></a>
        <a href="/#"><img className=" w-8 h-8 py-2 border rounded-full" src={twitter} alt="facebook" /></a>
        <a href="/#"><img className=" w-8 h-8 py-2 border rounded-full" src={instagram} alt="facebook" /></a>
      </div>
    </footer>
  );
}

export default Footer;
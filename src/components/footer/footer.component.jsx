import logo from "../../images/logo.svg"
import location from "../../images/icon-location.svg"
import phone from "../../images/icon-phone.svg"
import email from "../../images/icon-email.svg"

const Footer = () => {
  return ( 
    <footer className=" bg-black text-gray-200">
      <div><img className="" src={logo} alt="logo" /></div>
      <div>
        <p><img src={location} alt="" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero enim ipsum sapiente illo repellendus?</p>
      </div>

      <div>
        <p><img className="" src={phone} alt="" /> +1-543-123-4567</p>
        <p><img className="" src={email} alt="" /> example@fylo.com</p>
      </div>
    </footer>
   );
}
 
export default Footer;
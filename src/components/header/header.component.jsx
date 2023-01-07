import logo from "../../images/logo.svg"


const Header = () => {
  return (
    <header className=" font-raleway bg-intro-color text-gray-300 flex justify-between p-5">
      <img className="w-28 object-contain" src={logo} alt="" />

      <nav className="flex gap-6">
        <a className="hover:text-white hover:underline" href="/#">Features</a>
        <a className="hover:text-white hover:underline" href="/#">Team</a>
        <a className="hover:text-white hover:underline" href="/#">Sign In</a>
      </nav>
    </header>
  );
}

export default Header;
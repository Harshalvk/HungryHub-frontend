import logo from "../assets/logo_white.png";
const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-orange-400 mt-10 border-t  mx-auto px-8 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-4" />
          <h1 className="font-bold text-white">HungryHub</h1>
        </div>
        <div className="border my-2"></div>
        <ul className="gird grid-cols-2 grid md:grid-cols-1 font-semibold w-full text-white">
          <li>About</li>
          <li>Delivery</li>
          <li>Help & Support</li>
          <li>T&C</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

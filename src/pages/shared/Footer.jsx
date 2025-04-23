import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
    return (
      <footer className=" text-white">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 ">
          {/* Contact Section */}
          <div className=" bg-[#1F2937] px-4 py-10 text-center">
            <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
  
          {/* Social Section */}
          <div className="text-center bg-[#111827] py-10">
            <h3 className="text-lg font-semibold mb-2">Follow US</h3>
            <p>Join us on social media</p>
            <div className="flex justify-center  gap-4 mt-3 text-xl">
              <a href="#" className="hover:text-gray-400">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="bg-black text-center text-sm py-4">
          Copyright ©{new Date().getFullYear()} CulinaryCloud. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
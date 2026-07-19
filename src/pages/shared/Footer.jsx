import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
    return (
      <footer className="text-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Contact Section */}
          <div className="bg-neutral-900 px-6 py-12 text-center space-y-1.5">
            <h3 className="text-lg font-semibold mb-2 tracking-wide">CONTACT US</h3>
            <p className="text-neutral-400 text-sm">123 ABS Street, Uni 21, Bangladesh</p>
            <p className="text-neutral-400 text-sm">+88 123456789</p>
            <p className="text-neutral-400 text-sm">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-neutral-400 text-sm">Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Social Section */}
          <div className="text-center bg-neutral-950 py-12">
            <h3 className="text-lg font-semibold mb-2 tracking-wide">FOLLOW US</h3>
            <p className="text-neutral-400 text-sm">Join us on social media</p>
            <div className="flex justify-center gap-4 mt-4 text-lg">
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d3502a] hover:text-[#d3502a] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d3502a] hover:text-[#d3502a] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d3502a] hover:text-[#d3502a] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black text-center text-xs text-neutral-500 py-4">
          Copyright ©{new Date().getFullYear()} CulinaryCloud. All rights reserved.
        </div>
      </footer>
    );
  };

  export default Footer;

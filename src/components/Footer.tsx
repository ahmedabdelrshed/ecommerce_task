const Footer = () => {
  return (
    <footer className="border-t border-[#0000002B] mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + Address */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Funiro.</h2>
          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[#9F9F9F] mb-10">Links</h3>
          <ul className="space-y-10">
            <li>
              <a href="#" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[#9F9F9F] mb-10">Help</h3>
          <ul className="space-y-10">
            <li>
              <a href="#" className="text-black hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#9F9F9F]  mb-10">Newsletter</h3>
          <form className="flex  pb-1 gap-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none border-b border-black placeholder-[#9F9F9F] bg-transparent"
            />
            <button
              type="submit"
              className="ml-2 border-b border-black font-semibold text-black"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  border-t border-gray-200 px-4 py-6 text-sm ">
        2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

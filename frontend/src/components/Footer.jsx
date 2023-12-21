import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Container from "./Container";
const Footer = () => {
  return (
    <div className="border-t border-orange-500">
      <Container>
      <footer className="grid md:grid-cols-3 sm:grid-cols-2 justify-center py-10 gap-5">
        <div className="mr-4">
          <h4 className="text-3xl font-bold text-orange-500">TaskWarp</h4>
          <p className="text-orange-900">
            Stay connected and in control of your tasks anytime
          </p>
        </div>
        <div>
          <h5 className="text-xl capitalize text-orange-500 font-bold border-b-4 border-orange-200 w-fit">
            follow in
          </h5>
          <div className="text-orange-700 flex flex-wrap gap-4 mt-4">
            <Link to={"https://www.facebook.com"} target="_blank">
              <FaFacebookSquare className="text-2xl hover:text-orange-400" />
            </Link>
            <Link to={"https://www.instagram.com"} target="_blank">
              <RiInstagramFill className="text-2xl hover:text-orange-400" />
            </Link>
            <Link to={"https://twitter.com"} target="_blank">
              <FaTwitter className="text-2xl hover:text-orange-400" />
            </Link>
            <Link to={"https://linkedin.com"} target="_blank">
              <FaLinkedin className="text-2xl hover:text-orange-400" />
            </Link>
          </div>
        </div>
        <div>
          <form
            className="flex flex-row border-orange-500 border-2 rounded-lg p-px"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="w-8/12 py-3 px-2 outline-none"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="w-4/12 rounded-s-none font-semibold btnStyle"
            >
              submit
            </button>
          </form>
        </div>
      </footer>
      </Container>
      <footer className="footer footer-center p-4 bg-orange-200 text-orange-700">
        <aside>
          <p>© 2023 TaskWarp. All rights reserved. Privacy Policy | Terms of Service | Contact Us</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

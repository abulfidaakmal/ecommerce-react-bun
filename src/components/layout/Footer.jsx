import { Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative px-2 pt-4 pb-20 border-t top-36 md:px-20 footer bg-base-100 text-base-content border-primary">
      <nav>
        <h6 className="footer-title">Tokoo Info</h6>
        <Link className="link link-hover">About Tokoo</Link>
        <Link className="link link-hover">Tokoo blog</Link>
        <Link className="link link-hover">Latest news</Link>
        <Link className="link link-hover">Tokoo parents</Link>
        <Link className="link link-hover">Career</Link>
        <Link className="link link-hover">Policy and privacy terms</Link>
        <Link className="link link-hover">Intellectual property rights</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Buy</h6>
        <Link className="link link-hover">Bill and Top up</Link>
        <Link className="link link-hover">Tokoo COD</Link>
        <Link className="link link-hover">Free shipping</Link>
        <Link className="link link-hover">Career</Link>
        <Link className="link link-hover">Policy and privacy terms</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Sell</h6>
        <Link className="link link-hover">Seller education centre</Link>
        <Link className="link link-hover">Register official store</Link>
        <Link className="link link-hover">Travel for business</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-4">
          <Link to="https://github.com/abulfidaakmal" target="_blank">
            <Github />
          </Link>
          <Link to="https://www.linkedin.com/in/abulfidaakmal/" target="_blank">
            <Linkedin />
          </Link>
          <Link to="https://www.instagram.com/__ablfda/" target="_blank">
            <Instagram />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

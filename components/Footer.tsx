import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="py-4 px-2 text-[--white]">
      <div className="max-w-[--page-max-width] w-fit mx-auto flex gap-2 flex-wrap items-center">
        <nav
          className="px-4 rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] py-2"
          aria-label="Footer Navigation"
        >
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                className="hover:[text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:[text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)]"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:[text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)]"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:[text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)]"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hover:[text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)]"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Tidal-Sites/61553610020184/"
            aria-label="Facebook"
            className="w-10 h-10 grid place-content-center rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/tidalsites/"
            aria-label="Instagram"
            className="w-10 h-10 grid place-content-center rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/tidalsites"
            aria-label="Linkedin"
            className="w-10 h-10 grid place-content-center bg-black/30 rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <Link
            href="/contact"
            className="w-10 h-10 grid place-content-center bg-black/30 rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]"
            aria-label="email"
          >
            <FaEnvelope className="text-2xl" />
          </Link>
          <a
            href="tel:757-550-0830"
            className="w-10 h-10 grid place-content-center bg-black/30 rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]"
            aria-label="phone"
          >
            <FaPhone className="text-xl" />
          </a>
        </div>
      </div>
      <div className="max-w-[--page-max-width] mx-auto p-2 flex justify-between flex-wrap gap-2">
        <p>
          Already a customer?
          <a
            className="text-[--link-light] underline"
            href="https://g.page/r/CRXKrwtrLyweEBM/review"
            target="_blank"
          >
            Leave a review
          </a>
        </p>

        <span className="ml-auto">&copy; Tidal Sites, LLC 2024</span>
      </div>
    </div>
  );
};

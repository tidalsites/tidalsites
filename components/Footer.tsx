import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
export const Footer = () => {
  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";
  return (
    <div className="bg-[--black] text-[--white] px-4 border-t-2 border-t-[--white]">
      <div className="max-w-[--page-max-width] mx-auto flex flex-wrap justify-between items-center py-4">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link className="underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="underline" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="underline" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-between gap-4">
          <span className="py-4 border-b-2 border-[--white]">
            Contact Us Today
          </span>

          <div className="flex gap-4 items-center">
            <a
              target="_blank"
              href="https://www.facebook.com/people/Tidal-Sites/61553610020184/"
              aria-label="Facebook"
              className="w-10 h-10 grid place-content-center bg-black/30 rounded-full"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/tidalsites/"
              aria-label="Instagram"
              className="w-10 h-10 grid place-content-center bg-black/30 rounded-full"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/tidalsites"
              aria-label="Linkedin"
              className="w-10 h-10 grid place-content-center bg-black/30 rounded-full"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <Link
              href="/contact"
              className="w-10 h-10 grid place-content-center bg-black/30 rounded-full"
              aria-label="email"
            >
              <FaEnvelope className="text-2xl" />
            </Link>
            <a
              href="tel:757-550-0830"
              className="w-10 h-10 grid place-content-center bg-black/30 rounded-full"
              aria-label="phone"
            >
              <FaPhone className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[--page-max-width] mx-auto py-2">
        Already a customer?{" "}
        <a
          className="text-[--link-light] underline"
          href="https://g.page/r/CRXKrwtrLyweEBM/review"
          target="_blank"
        >
          Leave a review
        </a>
      </div>
      <div className="border-t-2 border-[--white] max-w-[--page-max-width] mx-auto text-center py-2">
        &copy; Tidal Sites, LLC 2023
      </div>
    </div>
  );
};

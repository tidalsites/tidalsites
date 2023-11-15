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
    <div className="bg-[--black] text-[--white] px-4">
      <div className="max-w-[--page-max-width] mx-auto flex justify-between  items-center py-4">
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-col gap-4">
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
          <div className="flex gap-2 items-center">
            <FaPhone />
            <a href="tel:757-550-0830">(757) 550-0830</a>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            <a
              href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
              target="_blank"
            >
              devin@tidalsites.com
            </a>
          </div>
          <div className="flex gap-4 justify-start py-4">
            <a
              target="_blank"
              href="https://www.facebook.com/people/Tidal-Sites/61553610020184/"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/tidalsites/"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/tidalsites"
              aria-label="Linkedin"
            >
              <FaLinkedin className="text-2xl" />
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

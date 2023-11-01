import { FC } from "react";
import { useRouter } from "next/router";
import Tidbit from "../components/Tidbit";
import styles from "../styles/Tidbits.module.scss";

const Tidbits: FC = () => {
  const router = useRouter();
  const query = router.query;
  const queryRef = Object.values(query)[0];
  return (
    <div className={styles.tidbits}>
      <h1>Tidal Sites Tidbits</h1>
      {tidbits.map(({ title, question, answer }) => (
        <Tidbit
          isCollapsed={title !== queryRef}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default Tidbits;

const tidbits = [
  {
    title: "seo",
    question: "What is SEO?",
    answer: [
      {
        elementType: "p",
        content:
          "SEO, or Search Engine Optimization, is a fundamental aspect of digital marketing that aims to improve a website's visibility and ranking in search engine results. When people use search engines like Google, Bing, or Yahoo to find information, products, or services, they typically click on the links displayed on the first page of results. SEO helps businesses and website owners optimize their online presence to appear higher in these search results, ultimately driving more organic traffic to their websites.",
      },
      {
        content:
          "The importance of SEO cannot be overstated in today's competitive online landscape. With millions of websites vying for attention, it is crucial for businesses to stand out and be easily discoverable by potential customers. SEO helps achieve this by optimizing various elements of a website, including relevant keywords, content quality, site structure, user experience, and mobile-friendliness. By adhering to SEO best practices, businesses can enhance their chances of appearing on the coveted first page of search results, leading to increased visibility, higher website traffic, and more opportunities for conversion.",
      },
      {
        content:
          "In summary, SEO is an indispensable tool for businesses seeking to improve their online presence and reach their target audience effectively. It is not only about attracting more visitors to your website but also about providing a seamless user experience and delivering valuable content that aligns with the needs and intentions of your potential customers. By investing in SEO, businesses can achieve long-term sustainable growth, establish authority in their industry, and stay ahead of the competition in the dynamic digital landscape.",
      },
    ],
  },
  {
    title: "designvsdevelopment",
    question: "What's the difference between Web Design & Web Development?",
    answer: [
      {
        content:
          "Web design and web development are two distinct but closely related disciplines that work together to create and maintain websites.",
      },
      {
        content:
          "Web design is the process of conceptualizing and creating the visual elements and user interface (UI) of a website. Web designers focus on the aesthetics, layout, and overall look and feel of the site. They are responsible for creating an engaging and user-friendly design that aligns with the brand identity and target audience of the website. Web designers use various tools like graphic design software and prototyping tools to create mockups and wireframes, which serve as blueprints for the website's appearance.",
      },
      {
        content:
          "Web development, on the other hand, involves turning the design concept into a fully functional website. Web developers are responsible for the technical implementation and coding of the website, making it interactive and functional. They use programming languages like HTML, CSS, JavaScript, and server-side languages (e.g., PHP, Python, Ruby) to build the website's structure, ensure responsiveness, and enable dynamic interactions. Web developers also handle back-end processes, such as database integration and server configuration.",
      },
      {
        content:
          "In summary, web design primarily focuses on the visual and user interface aspects of a website, while web development deals with the technical implementation and functionality, transforming the design into a fully operational website. Both web design and web development are essential components of the website creation process and work collaboratively to deliver a seamless and engaging web experience for users.",
      },
    ],
  },
  {
    title: "pwa",
    question: "What is a PWA?",
    answer: [],
  },
  {
    title: "qa",
    question: "What does Tidal Sites use for Quality Assurance?",
    answer: [
      {
        content:
          "Tidal Sites uses a browser-based tool called Lighthouse for Quality Assurance. Google Lighthouse is an open-source tool developed by Google that helps web developers improve the quality and performance of their websites. It evaluates web pages based on a set of best practices and provides valuable insights and recommendations for optimization.",
      },
    ],
  },
];

"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import slowWebsite from "@/public/assets/blog/slow-website-blog-header.png";

export const BlogContent = () => {
  const router = useRouter();
  const navigateToArticle = (route: string) => {
    // Navigate to the article
    router.push(route);
  };
  return (
    <section className="mt-[--navbar-height] min-h-screen max-w-page mx-auto py-8 px-4 | 2xl:px-0">
      <h1 className="text-4xl mb-20">Blog Articles</h1>
      <ul>
        <li
          className="cursor-pointer shadow-[0_0_4px_0_rgba(240,245,255.25)] hover:shadow-[0_0_12px_-2px_rgba(240,245,255.25)] transition-all w-fit rounded-3xl overflow-hidden outline outline-2 outline-[--theme]"
          onClick={() => navigateToArticle("/blog/why-your-website-is-slow")}
        >
          <BlogCard
            img={slowWebsite}
            alt="Slow website"
            title="Why is your website slow?"
            description="If your website is slow, you are losing customers. Learn why your website is slow and what you can do to fix it."
          />
        </li>
      </ul>
    </section>
  );
};

type BlogCardProps = {
  img: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

const BlogCard = ({ img, alt, title, description }: BlogCardProps) => {
  return (
    <div className="p-4 bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] text-[--white] max-w-[400px] ">
      <div className="h-[200px] rounded-3xl overflow-hidden mx-auto">
        <Image
          src={img}
          alt={alt}
          className="h-full object-cover object-right-top"
        />
      </div>
      <div className="w-[300px] h-1 bg-[--theme] rounded-full mt-4 mx-auto"></div>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

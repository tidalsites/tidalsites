import { Metadata } from "next";
import Image from "next/image";
import { FaWrench } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import header from "@/public/assets/blog/slow-website-blog-header.png";
import WebsiteAuditForm from "@/components/WebsiteAudit";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tidal Sites | Why Your Website is Slow",
  description:
    "A slow website can cost you customers. Learn why your website is slow and how you can improve website performance.",
};

export default function Blog() {
  return (
    <div className="min-h-screen p-4 mt-[--navbar-height] max-w-page mx-auto text-lg">
      <div className="w-fit mx-auto">
        <div className="max-h-[300px] mx-auto rounded-3xl overflow-hidden w-full mb-4">
          <Image
            className="object-cover w-full"
            src={header}
            alt="Robot with computer"
            priority
          />
        </div>

        <Link
          className="flex gap-2 items-center mb-8 ml-auto w-fit rounded-2xl px-4 py-2 bg-[rgba(0,0,0,.25)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.25)] hover:bg-[rgba(0,200,255,.5)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
          href="/blog"
        >
          <GoArrowLeft className="text-xl" /> Back to Articles
        </Link>

        <div className="flex flex-col w-fit mb-12">
          <h1 className="text-4xl font-bold | md:text-5xl | lg:text-6xl">
            Why Your Website Is Slow & How to Fix It
          </h1>
          <p className="text-sm text-gray-500 | md:mt-4">
            Posted on February 10, 2025 by Devin Haynes
          </p>
        </div>
        <section className="w-fit mx-auto flex flex-col gap-12 relative | lg:flex-row">
          <article className="max-w-[75ch]">
            <div className="flex flex-col gap-4">
              <h2 className="sr-only">Introduction</h2>
              <p>
                A slow website isn&apos;t just frustrating—it can hurt your
                business. Studies show that if a page takes longer than 3
                seconds to load, 53% of visitors leave. Plus, Google ranks slow
                websites lower, meaning fewer people even find your site. Many
                businesses pay additional fees for SEO services. If your website
                is slow, it can negate the effects of these services, leading to
                lost income.
              </p>
              <p>
                So, why is your website slow? More importantly, how can you fix
                it? In this guide, we&apos;ll cover common reasons for slow
                websites, how to audit your site&apos;s performance, and steps
                you can take to improve it—even if you&apos;re not a developer.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold upperase mt-8">
                Why Your Website May Be Slow
              </h2>
              <p>
                There are several reasons why your website might be running
                slowly, but many of them can be easily identified and fixed.
                Below, we&apos;ll cover the most common performance bottlenecks
                and how to address them effectively.
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl">1. Large Images</h3>

                <div className="ml-8 flex flex-col gap-4">
                  <p>
                    Images are one of the most commonly overlooked factors when
                    it comes to website performance. Many website builders—such
                    as WordPress, Wix, and Shopify—allow users to upload any
                    image they want. While this offers flexibility, it often
                    leads to poor image optimization.
                  </p>
                  <p>Many website designers and business owners either:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Use high-resolution stock images without resizing them.
                    </li>
                    <li>
                      Upload directly from a camera or phone without
                      compression.
                    </li>
                    <li>
                      Insert large images into small containers, wasting
                      bandwidth.
                    </li>
                  </ul>
                  <p>
                    While high-quality images enhance visual appeal, unoptimized
                    images increase load times significantly. A single
                    full-resolution image can be several megabytes in size,
                    forcing browsers to load unnecessary data before rendering
                    the page.
                  </p>
                  <h4 className="font-bold text-xl flex gap-4 items-center ">
                    <FaWrench className="outline outline-1 outline-white outline-offset-4 rounded-full" />
                    How can I fix it?
                  </h4>
                  <p>
                    Optimizing images is one of the easiest ways to improve
                    website speed. Here are a few things you can do to optimize
                    images:
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <strong className="underline">Image Compression</strong> -
                      Using free online tools like{" "}
                      <a
                        className="text-[--link-light] underline"
                        href="https://tinypng.com/"
                        target="_blank"
                      >
                        TinyPNG
                      </a>
                      , you can reduce image size without visible quality loss.
                      This can apply huge benefits to performance when applied
                      to all images on a website.
                    </li>
                    <li>
                      <strong className="underline">Image Format</strong> - WebP
                      images are 30-50% smaller than PNGs and JPEGs without
                      sacrificing quality. Use tools like{" "}
                      <a
                        className="text-[--link-light] underline"
                        href="https://cloudconvert.com/png-to-webp"
                        target="_blank"
                      >
                        CloudConvert
                      </a>{" "}
                      for simple conversion. Additionally, consider modifying
                      small graphics, such as logos and icons to SVG format.
                      This format is scalable and lightweight, making it ideal
                      for responsive design.
                    </li>
                    <li>
                      <strong className="underline">Lazy Loading</strong> - This
                      is the process of loading images only when they enter the
                      user&apos;s viewport, reducing initial page load times.
                      Many website builders and CMS platforms offer this feature
                      by default, but you may need to ensure they are
                      implemented properly for the best effect.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="font-bold text-xl">
                  2. Network Latency & Large Payloads
                </h3>
                <div className="ml-8 flex flex-col gap-4">
                  <p>
                    Network latency refers to the delay in retrieving data from
                    the server when a webpage is loaded. Every element on a
                    webpage—images, scripts, fonts, third-party APIs—requires a
                    request-response cycle between the browser and the server.
                    If your site is loading too much data at once, it will
                    experience longer load times and potential slowdowns.
                  </p>

                  <h4 className="font-bold text-xl flex gap-4 items-center ">
                    <FaWrench className="outline outline-1 outline-white outline-offset-4 rounded-full" />
                    How can I fix it?
                  </h4>
                  <ul>
                    <li>
                      <strong className="underline">
                        Minify CSS and JavaScript
                      </strong>{" "}
                      - Minification is the process of removing unnecessary
                      characters from code without affecting functionality. This
                      reduces file size and speeds up load times. Many website
                      builders and CMS platforms offer plugins or built-in tools
                      for minification.
                    </li>
                    <li>
                      <strong className="underline">
                        Use a Content Delivery Network
                      </strong>{" "}
                      - A CDN is a network of servers distributed across the
                      globe that store cached versions of your website&apos;s
                      static content. When a user visits your site, the CDN
                      serves content from the server closest to them, reducing
                      latency and speeding up load times. Popular CDNs include
                      Cloudflare, Akamai, and Amazon CloudFront.
                    </li>
                    <li>
                      <strong className="underline">
                        Upgrade Your Hosting Plan
                      </strong>{" "}
                      - If you&apos;ve tried optimizing your website and
                      it&apos;s still slow, consider upgrading your hosting
                      plan. Shared hosting plans are often slower than VPS or
                      dedicated hosting, which offer more resources and better
                      performance.
                    </li>
                    <li>
                      <strong className="underline">
                        Reduce Third-Party Scripts
                      </strong>{" "}
                      - Third-party scripts, such as analytics, chat widgets,
                      and social media plugins can significantly impact load
                      times. Limit the number of third-party scripts on your
                      site to only those that are essential.
                    </li>
                    <li>
                      <strong className="underline">
                        Reduce Image Sizes & Optimize Assets
                      </strong>{" "}
                      - As discussed above, reducing image file sizes is one of
                      the quickest ways to decrease payload size.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="font-bold text-xl">
                  3. Excessive CSS & JavaScript (Poorly Optimized Code)
                </h3>
                <div className="ml-8 flex flex-col gap-4">
                  <p>
                    Your website&apos;s CSS and JavaScript define its styling
                    and functionality, but too much unoptimized code can lead to
                    longer load times.
                  </p>
                  <p>Common problems include:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Unused CSS & JavaScript</strong> - Many sites load
                      entire CSS frameworks when only a small portion is needed.
                    </li>
                    <li>
                      <strong>Blocking JavaScript</strong> - Scripts that
                      execute before the page renders cause delays in displaying
                      content.
                    </li>
                    <li>
                      <strong>Too Many WordPress Plugins</strong> - WordPress
                      users often install dozens of plugins, adding unnecessary
                      scripts and stylesheets.
                    </li>
                  </ul>
                  <h4 className="font-bold text-xl flex gap-4 items-center ">
                    <FaWrench className="outline outline-1 outline-white outline-offset-4 rounded-full" />
                    How can I fix it?
                  </h4>
                  <ul>
                    <li>
                      <strong className="underline">
                        Defer JavaScript Execution
                      </strong>
                      - Defer loading of non-critical JavaScript until after the
                      page has loaded. This can be done by adding the{" "}
                      <code>defer</code> attribute to your script tags.
                    </li>
                    <li>
                      <strong className="underline">
                        Remove Unused CSS (For WordPress & Static Sites)
                      </strong>
                      - Tools like PurifyCSS or UnCSS can help identify and
                      remove unused CSS classes from your stylesheets, which
                      will help reduce file size.
                    </li>
                    <li>
                      <strong className="underline">
                        Manage WordPress Plugins
                      </strong>
                      - Regularly audit your plugins and remove any that are not
                      in use. Consider replacing heavy plugins with lightweight
                      alternatives. For more tips, you can check out this{" "}
                      <a
                        className="text-[--link-light] underline"
                        href="https://wpengine.com/resources/improve-wordpress-site-speed/"
                        target="_blank"
                      >
                        article
                      </a>{" "}
                      for a more in-depth guide for Wordpress.
                    </li>
                    <li>
                      <strong className="underline">
                        Code Splitting (For JavaScript-heavy Sites like Next.js)
                      </strong>
                      - **Please note this is typically for web developers.**
                      Code splitting is the process of breaking up your
                      JavaScript code into smaller, more manageable chunks. This
                      can improve load times by only loading the code needed for
                      the current page, rather than the entire application.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold upperase mt-8">
                Final Thoughts
              </h2>
              <p>
                A slow website frustrates users, affects search rankings, and
                reduces conversions. Fortunately, many speed problems can be
                fixed quickly with simple optimizations.
              </p>
              <ul className="ml-4 flex flex-col gap-2">
                <li>
                  <strong className="text-xl underline">Step 1:</strong> Audit
                  your website&apos;s performance using our free tool or another
                  free tool such as Google PageSpeed Insights.
                </li>
                <li>
                  <strong className="text-xl underline">Step 2:</strong>{" "}
                  Optimize images, CSS, and JavaScript to minimize load times.
                </li>
                <li>
                  <strong className="text-xl underline">Step 3:</strong> Reduce
                  network latency using CDNs and asset minification.
                </li>
                <li>
                  <strong className="text-xl underline">Step 4:</strong>
                  Eliminate unnecessary WordPress plugins and third-party
                  scripts.
                </li>
              </ul>
            </div>
          </article>
          <aside className="outline outline-1 outline-[--theme] rounded-2xl flex h-fit w-fit mx-auto">
            <WebsiteAuditForm />
          </aside>
        </section>
      </div>
    </div>
  );
}

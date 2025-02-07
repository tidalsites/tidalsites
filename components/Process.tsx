export const Process = () => {
  return (
    <section className="mt-20 px-4">
      <div className="mx-auto max-w-page py-10">
        <div className="mb-20">
          <h2 className="text-4xl my-4 border-b-[--theme] uppercase border-b-2 border-[--theme]">
            LOVE THE PROCESS
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <div className="flex w-full pt-4 border-t-2 border-black/10 items-center px-4 gap-2">
              <div className="bg-[--theme] flex items-center justify-center p-2 text-white text-2xl rounded">
                1
              </div>
              <span className="text-2xl w-fit pr-4 border-b-2 border-[--theme] self-end">
                Design
              </span>
            </div>

            <p className="w-full p-4 ">
              All websites from Tidal Sites are custom designed. No templates!
              Each customer is unique and we value and encourage anyone with a
              website to create their own unique experience on the web. Our web
              design process ensures that you are happy with the look and feel
              of your website before we even start to build anything.
            </p>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <div className="flex w-full pt-4 border-t-2 border-black/10 items-center px-4 gap-2">
              <div className="bg-[--theme] flex items-center justify-center p-2 text-white text-2xl rounded">
                2
              </div>
              <span className="text-2xl w-fit pr-4 border-b-2 border-[--theme] self-end">
                Develop
              </span>
            </div>
            <p className="w-full p-4 ">
              After a website is designed, it is time to build it. Once a base
              portion of the site is ready, we put it on a temporary hosting
              platform and send you a link. This allows you to have a keep
              up-to-date with all the progress we are making.
            </p>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg items-center max-w-[400px] border-2 border-black/10">
            <div className="flex w-full pt-4 border-t-2 border-black/10 items-center px-4 gap-2">
              <div className="bg-[--theme] flex items-center justify-center p-2 text-white text-2xl rounded">
                3
              </div>
              <span className="text-2xl w-fit pr-4 border-b-2 border-[--theme] self-end">
                Deploy
              </span>
            </div>
            <p className="w-full p-4 ">
              The site is designed. The site is built and looks just the way you
              want it. Now it is time to deploy. This is when your website goes
              publi Whether you choose your own hosting platform or choose to
              leverage Tidal Sites, we ensure a smooth process in making your
              website go live!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

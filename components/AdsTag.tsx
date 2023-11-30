import Script from "next/script";

function AdsTag() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11265957515" />
      <Script id="google-ads">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11265957515');
        `}
      </Script>
    </>
  );
}

export default AdsTag;

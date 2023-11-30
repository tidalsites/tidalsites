import Script from "next/script";

function AnalyticsTag() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9VYB96T625" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9VYB96T625');
        `}
      </Script>
    </>
  );
}

export default AnalyticsTag;

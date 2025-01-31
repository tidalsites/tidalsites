"use client";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function AuditForm() {
  const [url, setUrl] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (recaptchaRef.current === null) return;
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const response = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, token }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        required
      />
      <ReCAPTCHA sitekey="YOUR_SITE_KEY" ref={recaptchaRef} size="invisible" />
      <button type="submit">Run Audit</button>
    </form>
  );
}

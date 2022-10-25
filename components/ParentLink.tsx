import Link from "next/link";

export const ParentLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/Home.module.scss";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

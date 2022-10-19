import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "../styles/Home.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

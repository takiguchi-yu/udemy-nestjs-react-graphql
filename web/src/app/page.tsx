import NotFound from "@/components/NotFound";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Main from "@/components/Main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SignIn />
      <SignUp />
      <Main />
      <NotFound />
    </main>
  );
}

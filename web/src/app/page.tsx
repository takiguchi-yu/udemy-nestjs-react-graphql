import Main from "@/components/Main";
import { Payload } from "@/types/payload";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import styles from "./page.module.css";

export default async function HomePage() {
  const token = cookies().get("token")?.value;

  if (token) {
    try {
      const decodedToken = jwtDecode<Payload>(token);
      // トークンの有効期限切れ
      if (decodedToken.exp * 1000 < Date.now()) {
        redirect("/signin");
      } else {
        // 認証済み
        return (
          <main className={styles.main}>
            <Main />
          </main>
        );
      }
    } catch (error) {
      // デコードエラー
      redirect("/signin");
    }
  } else {
    // トークンがない場合
    redirect("/signin");
  }
}

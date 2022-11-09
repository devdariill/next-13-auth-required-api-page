import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import LoginLogout from "../src/components/LoginLogout";
import styles from "../styles/Home.module.css";

const Profile = (props) => {
  console.log("props",props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Your Profile</h1>
        <LoginLogout />
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <img src={props.user.picture} width={40} height={40} />
            <h2>Hola {props.user.name}</h2>
          </div>
          <div>Email:{props.user.email}</div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};
//genera la auth y envia props al componente "Profile"
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps() {
    return {
      props: { foo: "bar" },
    };
  },
});
export default Profile;

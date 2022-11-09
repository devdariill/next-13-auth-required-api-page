import { useUser } from "@auth0/nextjs-auth0";
import styles from "../../styles/Home.module.css";
function LoginLogout() {
  const { error, isLoading, user } = useUser();
  if (error) return <div>Oops... {error}</div>;
  if (isLoading) return <div>Loading...</div>;
//   console.log(user);
  return (
    <div className={styles.grid}>
      <div>LoginLogout</div>
      {!user && (
        <a href="/api/auth/login" className={styles.card}>
          <h2>Login</h2>
        </a>
      )}
      {user && (
        <a href="/api/auth/logout" className={styles.card}>
          <h2>Logout</h2>
        </a>
      )}
    </div>
  );
}
export default LoginLogout;

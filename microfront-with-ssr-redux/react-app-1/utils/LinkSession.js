import Link from "next/link";
import { useStore } from "react-redux";
import { updateSessionState } from "../redux/sessionStore";
import styles from "../styles/Home.module.css";

export default function LinkSession({ children, route }) {
  let store = useStore();

  const handleClick = () => {
    console.log(sessionStorage);
    updateSessionState(store);
    console.log(sessionStorage);
  };
  return (
    <div onClick={handleClick}>
      <Link href={route}>
        <a className={styles.link}>{children}</a>
      </Link>
    </div>
  );
}

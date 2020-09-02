import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useStore, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchSessionState } from "../redux/actions";

export function LinkSession({ children, route }) {
  let store = useStore();

  function updateSessionState(store) {
    let { productsList, ...state } = store.getState();
    console.log(state);
    let state_string = JSON.stringify(state.basket);
    sessionStorage.setItem("store.state", state_string);
  }

  const handleClick = () => {
    updateSessionState(store);
  };

  return (
    <div onClick={handleClick}>
      <Link href={route}>
        <a className={styles.link}>{children}</a>
      </Link>
    </div>
  );
}

export default function useSessionState() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSessionState(dispatch);
  }, []);
}

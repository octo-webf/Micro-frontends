import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSessionState } from "../redux/actions";

export function syncSessionStorage(state) {
  let new_state = { basket: state };
  sessionStorage.setItem("store.state", JSON.stringify(new_state));
}

export default function useSessionState() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSessionState(dispatch);
  }, []);
}

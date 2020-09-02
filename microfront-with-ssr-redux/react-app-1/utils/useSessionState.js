import { fetchSessionState } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useSessionState() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSessionState(dispatch);
  }, []);
}

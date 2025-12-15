import { makeRequest } from "../utils/http";
import useAuthStore from "../../features/auth/useAuthStore";

const logout = async () => {
  const res = await makeRequest("POST", "/logout");
  const {reset} = useAuthStore.getState();
  if (res.status === 200) {
    reset();
    window.location.href = "/login";
  }
};

export default logout;

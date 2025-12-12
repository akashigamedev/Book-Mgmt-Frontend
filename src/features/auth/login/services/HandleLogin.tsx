import type { NavigateFunction } from "react-router";

// Types
import { ToastType, type LoginResponse } from "../../../../../types";

// Apis
import login from "../api/login";

// Hooks
import { useToastStore } from "../../../../globals/hooks/useToastStore";
import useAuthStore from "../../useAuthStore";

/**
 * Authenticate the user and navigate to the dashboard on success, otherwise show an error toast.
 */
const handleLogin = async (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  const { setToast } = useToastStore.getState();
  const {setData} =  useAuthStore.getState();

  const res: LoginResponse = await login(email, password);

  if (res?.message === "success") {
    setData(res?.data)
    navigate("/dashboard");
  } else {
    setToast({
      title: "Error",
      description: res.message,
      type: ToastType.DANGER,
    });
  }
};

export default handleLogin;

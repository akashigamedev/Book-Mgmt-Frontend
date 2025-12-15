import { ToastType } from "../../../../types";
import { useToastStore } from "../../../globals/hooks/useToastStore";
import { makeRequest } from "../../../globals/utils/http";
import getAllRequests from "./getAllRequests";

const resolveRequest = async (
  userId: number,
  bookId: number,
  status: "approved" | "rejected"
) => {
  const { setToast } = useToastStore.getState();
  const res = await makeRequest("POST", "/resolve-request", {
    userId,
    bookId,
    status,
  });
  if (res.status && res.status === 200) {
    setToast({
      title: "Success",
      description: `Successfully ${status} request!`,
      type: ToastType.SUCCESS,
    });
  } else {
    setToast({
      title: "Error",
      description: "Something went wrong!",
      type: ToastType.DANGER,
    });
  }
  getAllRequests();
};

export default resolveRequest;

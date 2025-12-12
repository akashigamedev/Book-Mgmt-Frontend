import { useToastStore } from "../hooks/useToastStore";
import { Toast } from "./Toast";

export default function GlobalToast() {
  const showToast = useToastStore(s => s.showToast);
  const toastData = useToastStore(s => s.toastData);

  if (!showToast || !toastData) return null;


  return <Toast {...toastData} />;
}

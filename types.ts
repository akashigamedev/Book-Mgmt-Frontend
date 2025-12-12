export interface LoginResponse {
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}
export interface AuthData {
  name: string;
  email: string;
  role: string;
}


export enum ToastType {
  SUCCESS = "success",
  DANGER = "danger",
  PRIMARY = "primary",
  WARNING = "warning",
  PATCH = "patch",
}

export interface ToastData {
  type?: ToastType;
  title: string;
  description?: string;
  button?: string;
  onClick?: () => void;
  duration?: number;
  redirect?: string;
}

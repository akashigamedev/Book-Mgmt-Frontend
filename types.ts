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
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  isbn: string;
  description: string;
  genre: string;
  status: string;
  created_at: string;
}

export interface IRequest {
  id: number;
  book_id: number;
  requested_at: string;
  status: string;
  note: string;
  duration_until: string;
  book_title: string;
  book_author: string;
  book_genre: string;
}

export interface IBookRequestGroup {
  bookId: number;
  book: IRequestBook;
  requests: IBookRequest[];
}

export interface IRequestBook {
  id: number;
  title: string;
  author: string;
  genre: string;
}

export interface IBookRequest {
  status: "pending" | "approved" | "rejected";
  requestedAt: string;
  note: string;
  durationUntil: string; 
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
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

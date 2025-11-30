export interface IBook {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  name: string;
  author: string;
  publication: string;
}

export interface IBookDTO {
  name: string;
  author: string;
  publication: string;
}

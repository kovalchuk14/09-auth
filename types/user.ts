export interface User {
  id: string;
  email: string;
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type RegisterRequest  = {
  email: string;
  password: string;
}
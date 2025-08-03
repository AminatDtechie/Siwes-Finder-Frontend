export interface LoginCredentials {
  email: string;
  password: string;
}

export type OtpResponse = {
  message: string;
  success: boolean;
};

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  [key: string]: unknown;
}

export interface OtpData {
  otp: string;
}

export interface AuthToken {
  token: string;
}

export interface UserProfile {
  userId: string | number;
  [key: string]: unknown;
}

export interface User {
  profile: UserProfile;
  lastRoleId?: number;
  [key: string]: unknown;
}

export interface AuthDetails {
  user: User;
  token: AuthToken;
  [key: string]: unknown;
}

export interface AuthContextType {
  authDetails: AuthDetails | null;
  updateAuth: (data: AuthDetails | null) => void;
}

export interface APIResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface AuthUser {
  id: string | number;
  name: string;
  email: string;
  token: string;
  profile?: UserProfile;
}

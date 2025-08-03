export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  [key: string]: unknown;
}

export interface OtpData {
  otp: string;
}

export type OtpResponse = {
  message: string;
  success: boolean;
};

export interface APIResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

// Represents a profile structure from your backend
export interface UserProfile {
  userId: string | number;
  [key: string]: unknown;
}

// What the backend sends after login
export interface AuthToken {
  token: string;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  profile?: UserProfile;
  lastRoleId?: number;
  [key: string]: unknown;
}

// Full authentication details returned from backend
export interface AuthDetails {
  user: User;
  token: AuthToken;
  [key: string]: unknown;
}

// Local simplified auth user used in context
export interface AuthUser {
  id: string | number;
  name: string;
  email: string;
  token: {
    token: string;
    expiresAt: string;
  };
  profile?: UserProfile;
}

// Context structure
export interface AuthContextType {
  authDetails: AuthUser | null;
  updateAuth: (data: AuthUser | null) => void;
}

// Login credentials for login form
export interface LoginCredentials {
  email: string;
  password: string;
}

// OTP response from API
export interface OtpResponse {
  message: string;
  success: boolean;
}

// Data for registration
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  [key: string]: unknown;
}

// OTP data for verification
export interface OtpData {
  otp: string;
}

// Auth token
export interface Token {
  token: string;
}

// Profile data of the user
export interface UserProfile {
  userId: string | number;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

// Complete user information
export interface AuthUser {
  id: string | number;
  name: string;
  email: string;
  token: string;
  profile?: UserProfile;
}

// Context type used in React context
export interface AuthContextType {
  authDetails: AuthUser | null;
  updateAuth: (user: AuthUser | null) => void;
}

// Generic API response wrapper
export interface APIResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

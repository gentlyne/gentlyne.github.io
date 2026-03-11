export interface AuthResult {
  token: string;
}

export interface SignUpBody {
  email: string;
  password: string;
  commandId?: string;
}

export interface SignInBody {
  email: string;
  password: string;
}

export interface UpdateProfileBody {
  name: string;
}

export interface ChangePasswordBody {
  password: string;
  newPassword: string;
}

export interface ChangePasswordResult {
  success: boolean;
}

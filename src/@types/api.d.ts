declare module 'Api' {
  export interface SigninApi {
    email: string;
    password: string;
  }

  export interface EmailFindApi {
    name: string;
    studentId: string;
  }

  export interface PasswordFindApi {
    name: string;
    email: string;
  }

  export interface EditPasswordApi {
    newPassword: string;
  }

  export interface TokenHeaderApi {
    Authorization: string;
  }
}

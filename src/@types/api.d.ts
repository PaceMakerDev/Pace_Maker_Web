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
}

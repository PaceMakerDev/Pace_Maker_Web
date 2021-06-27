declare module 'Api' {
  export interface SigninApi {
    email: string;
    password: string;
  }

  export interface SignupApi {
    email: string;
    name: string;
    major: string;
    studentId: string;
    password: string;
    birthday: string;
    academicStatus: 'ATTENDING' | 'TAKE_OFF';
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

  export interface EmailCodeApi {
    email: string;
  }

  export interface EmailVerifyApi {
    email: string;
    code: string;
  }
}

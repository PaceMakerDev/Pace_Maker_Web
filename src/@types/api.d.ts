/* global StudyRoomOverview */

declare interface SigninApi {
  email: string;
  password: string;
}

declare interface SignupApi {
  email: string;
  name: string;
  major: string;
  studentId: string;
  password: string;
  birthday: string;
  academicStatus: 'ATTENDING' | 'TAKE_OFF';
}

declare interface EmailFindApi {
  name: string;
  studentId: string;
}

declare interface PasswordFindApi {
  name: string;
  email: string;
}

declare interface EditPasswordApi {
  newPassword: string;
}

declare interface EmailCodeApi {
  email: string;
}

declare interface EmailVerifyApi {
  email: string;
  code: string;
}

declare interface AuthHeader {
  Authorization: string;
}

declare interface SigninData {
  accessToken: string;
  refreshToken: string;
  shouldChangePassword: boolean;
  user: {
    id: number;
    name: string;
  };
}

declare type MyStudyRoomData = Array<StudyRoomOverview>